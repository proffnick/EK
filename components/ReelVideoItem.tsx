import React, { useState } from 'react';
import useStyle from '../assets/style/style';
import Video from 'react-native-video';
import { View, TouchableWithoutFeedback } from 'react-native';
import { ReelVideoItemProps } from '../interfaces';
import { SimpleLoader } from './widgets/SimpleLoader';
import { useIsFocused } from '@react-navigation/native';
import { VideoStats } from './widgets/VideoStats';

export const ReelVideoItem: React.FC<ReelVideoItemProps> = ({
  url,
  index,
  containerStyle = {},
  onPress,
  reference,
  isFullVideo = false,
  videoDetails,
  isPaused
}): React.JSX.Element => {

  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);
  const STYLE = useStyle();
  
  return (
    <View 
        style={
          isFullVideo? 
          STYLE.fullVideoItem: 
          [STYLE.reelVideoItemContainer, containerStyle]
          } 
        key={index}>
      <TouchableWithoutFeedback 
        onPress={
          (e) => isFullVideo ?  onPress(isFocused, true): onPress(index)
        }>
        <Video
          testID='video-item'
          ref={reference}
          source={{ uri: url }}  
          style={isFullVideo? STYLE.FullVideo: STYLE.reelVideoItemVideo}
          paused={isPaused}
          controls={isFullVideo? true: false} 
          repeat={isFullVideo? true: false}
          resizeMode='cover' 
          onBuffer={(e) => e.isBuffering && isFullVideo ? setLoading(true): setLoading(false)} 
          onError={() => setLoading(false)}
          fullscreen={false}
          renderLoader={<SimpleLoader loading />} 
        />
      </TouchableWithoutFeedback>
      {
        (isFullVideo && typeof videoDetails === 'object')? 
        <VideoStats 
          comments={videoDetails.comments_count} 
          likes={videoDetails.likes_count} 
        />: <></> 
      }
      <SimpleLoader loading={loading} />
    </View>
  );
};
