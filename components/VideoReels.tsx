import React, { useRef } from 'react';
import useStyle from '../assets/style/style';
import useRoutes from '../hooks/useRoutes';
import useNavigator from '../hooks/useNavigation';
import usePlatform from '../hooks/usePlayform';
import { Animated, View } from 'react-native';
import { ReelData, VideoObject } from '../interfaces';
import { ReelVideoItem } from './ReelVideoItem';

export const VideoReels: React.FC<ReelData> = ({ DATA }): React.JSX.Element => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<Animated.FlatList<VideoObject>>(null);
  const activeVideoRef = useRef<any>();
  const STYLE = useStyle();
  const { MEDIA } = useRoutes();
  const { navigation } = useNavigator();
  const { isAndroid } = usePlatform();

  /***** 
    To make selected video first item on the list, and
    we could adopt a different approach if we are using a list that's
    large in size; Here we simply swapped the indexes
  *****/

  const swapPlayList = (videos:VideoObject[], selectedIndex:number):VideoObject[] => {
    /***
     * In order to swap without affecting existing list
     * Make a copy of existing playlist
     * take the first and second item
     * check if the selected index is not the first
     * if it is, just return the list
     * other
    ***/
    const incomingList:VideoObject[] = [...videos];
    const selectedVideo   = incomingList[selectedIndex];
    const firstVideo      = incomingList[0];
    if(selectedIndex !== 0){
      incomingList[0] = selectedVideo;
      incomingList[selectedIndex] = firstVideo;
    }
    return incomingList;
  };

  /***
   * When a video is slected,
   * we put it as the first item on the playlist (Videos)
   * before sending to Media screen.
   * This will prevent the media screen from
   * unnecessary renders
  ***/
  const onVideoSelected = (index:number) => {
    if(index >= 0 && index < DATA?.length){
      const newPlayList:VideoObject[] = swapPlayList(DATA, index);
      navigation.navigate(MEDIA, {index: 0, videos: newPlayList});
    }
  }

  return (
    <View style={STYLE.VideoReelContainer}>
      <Animated.FlatList
        ref={flatListRef}
        data={DATA}
        keyExtractor={(item:VideoObject) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={STYLE.VideoReelPreview.width}
        decelerationRate='fast'
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={( { item } ) => (
          <ReelVideoItem 
            containerStyle={{...STYLE.VideoReelItem, width: STYLE.VideoReelPreview.width}} 
            index={DATA.indexOf(item)}
            url={isAndroid ? item.urls.mp4: item.urls.mov}
            reference={activeVideoRef}
            onPress={onVideoSelected}
            isPaused={true}
            isFullVideo={false}
          />
        )}
      />
    </View>
  );
};
