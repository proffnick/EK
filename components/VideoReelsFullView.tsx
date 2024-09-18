import React, { useRef, useState } from 'react';
import useStyle from '../assets/style/style';
import usePlatform from '../hooks/usePlayform';
import { Animated, View } from 'react-native';
import { VideoObject, FullVideoView } from '../interfaces';
import { ReelVideoItem } from './ReelVideoItem';
import { SimpleLoader } from './widgets/SimpleLoader';

export const VideoReelsFullView: React.FC<FullVideoView> = ({ 
  index,
  videos
 }): React.JSX.Element => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(index);
  const { isAndroid } = usePlatform();
  const flatListRef = useRef<Animated.FlatList<VideoObject>>(null);
  const STYLE = useStyle();
  
  /**
   * Handle when the user
   * scrolls between the 
   * plasylist
   * When the index changes, the paused props
   * of the video package turns false
   * allowing the video to start playing
  **/
  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: false,
      listener: (event: any) => {
        const newIndex = Math.round(event.nativeEvent.contentOffset.y / STYLE.FullVideo.height);
        setCurrentIndex(newIndex); 
      },
    }
  );

  /***
   * Meant to control playing
   * or paulsing the video
   * If controls are not enabled on the video
  ***/
  const onVideoTapped = (isFocused: boolean, isPlaying: boolean) => {
    if(isFocused){
      // video is in focus
    }
  }

  /***
   * If no video is provided
   * Then show loader
   * as a placeholder
  ***/
  if (videos.length === 0) {
    return <SimpleLoader loading />;
  }

  return (
    <View style={STYLE.VideoReelContainerFull}>
      <Animated.FlatList
        ref={flatListRef}
        data={videos}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        snapToAlignment='start'
        decelerationRate='fast'
        snapToInterval={STYLE.FullVideo.height} 
        getItemLayout={(data, index) => ({
          length: STYLE.FullVideo.height,
          offset: STYLE.FullVideo.height * index,
          index,
        })}
        initialScrollIndex={currentIndex}
        renderItem={( { item, index } ) => { 
          return (
          <ReelVideoItem 
            containerStyle={{
              ...STYLE.VideoReelItem, 
              width: STYLE.VideoReelPreview.width
            }} 
            index={index}
            url={isAndroid ? item.urls.mp4: item.urls.mov}
            onPress={onVideoTapped}
            isFullVideo={true}
            videoDetails={item}
            isPaused={currentIndex !== index}
          />
        ) }}
      />
    </View>
  );
};
