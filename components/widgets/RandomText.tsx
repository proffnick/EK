import React from 'react';
import useStyle from '../../assets/style/style';
import { WelcomeAccountText } from '../../interfaces';
import { View, Text } from 'react-native';
import { constants } from '../../utility/cache';
import { AppIcon } from '../../assets/style/AppIcons';

export const RandomText: React.FC<WelcomeAccountText> = ({ 
  text, 
  TextStyle = {}, 
  containerStyle = {},
  isTitleWIthIcon = false,
  iconName = 'play', 
}): React.JSX.Element => {
  const STYLE = useStyle();
  return(
    <View style={[STYLE.welcomeTextContainerStyle, containerStyle]}>
      {!isTitleWIthIcon &&<Text style={[STYLE.welcomeTextStyle, TextStyle]}>
        {text ? text: constants.welcome_text}
      </Text>}
      {
        isTitleWIthIcon && <View style={[
          STYLE.titleWithIconContainer, 
          STYLE.titleWithIconContainerInner
          ]}>
          <AppIcon 
            name={iconName} 
            size={24} 
            type='MaterialCommunity' 
          />
          <Text style={[STYLE.welcomeTextStyle, TextStyle]}>
            {text ? text: constants.welcome_text}
          </Text>
        </View>
      }
    </View>
  )
}