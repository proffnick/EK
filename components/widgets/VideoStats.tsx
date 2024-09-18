import React from 'react';
import useStyle from '../../assets/style/style';
import useHelper from '../../hooks/useHelper';
import { View, Text } from 'react-native';
import { VideoStatProps } from '../../interfaces';
import { AppIcon } from '../../assets/style/AppIcons';

export const VideoStats: React.FC<VideoStatProps> = ({
  comments,
  likes
}): React.JSX.Element => {
  const { formatNumber } = useHelper();
  const STYLE = useStyle();
  
  /*
    Here text style from external files causes the app to crash on 
    android for some reason, and therefore had to be added manually
    for the time being
  */
  return(
    <View style={STYLE.videoStatContainer}>
      <View style={STYLE.videoStatsItemsContainers}>
          <View style={STYLE.videoStatsCommentsLikesmargins}>
            <AppIcon 
              name='heart' 
              color='#E84335' 
              type='IonIcons' 
              size={26} 
            />
          </View>
          <View>
            <Text style={{ 
              color: '#FFFFFF', 
              fontSize: 14, 
              lineHeight: 16, 
              fontWeight: 600, 
              textAlign: 'center' 
            }}>
              {formatNumber(likes)}
            </Text>
          </View>
      </View>
      <View style={STYLE.videoStatsItemsContainers}>
         <View style={STYLE.videoStatsCommentsLikesmargins}>
            <AppIcon 
              name='chatbubble' 
              color='#FFFFFF' 
              type='IonIcons' 
              size={26} 
            />
          </View>
          <View>
            <Text style={{ 
              color: '#FFFFFF', 
              fontSize: 14, 
              lineHeight: 16, 
              fontWeight: 600, 
              textAlign: 'center' 
            }}>
              {formatNumber(comments)}
            </Text>
          </View>
      </View>
      <View style={STYLE.videoStatsItemsContainers}>
        <View style={STYLE.videoStatsCommentsLikesmargins}>
            <AppIcon 
              name='ellipsis-horizontal' 
              color='#FFFFFF' 
              type='IonIcons' 
              size={26} 
            />
        </View>
      </View>
    </View>
  )
}