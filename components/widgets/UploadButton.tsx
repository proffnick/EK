import { 
  View, 
  TouchableOpacity, 
  Text } from 'react-native';
import React from 'react';
import useStyle from '../../assets/style/style';
import { AppIcon } from '../../assets/style/AppIcons';
import { constants } from '../../utility/cache';
import { UploadButtonProp } from '../../interfaces'; 


export const UploadButton: 
React.FC<UploadButtonProp> = ({ onPress }): 
React.JSX.Element => {
  const STYLE = useStyle();
  return (
    <TouchableOpacity 
      style={STYLE.uploadButtonPress} 
      onPress={(e) =>  onPress()}>
      <View style={STYLE.uploadButtonConatiner}>
        <AppIcon 
          name='videocam' 
          color='#FFFFFF' 
          type='IonIcons'  
        />
        <Text style={STYLE.uploadButtonText}>
          {constants.upload_text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}