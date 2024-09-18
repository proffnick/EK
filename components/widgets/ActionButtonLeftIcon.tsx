import React from 'react';
import useStyle from '../../assets/style/style';
import { View } from 'react-native';
import { AppIcon } from '../../assets/style/AppIcons';

export const ActionButtonLeftIcon: 
  React.FC = (): 
  React.JSX.Element => {
  const STYLE = useStyle();
  return(
    <View style={STYLE.actionButtonLeftIcon}>
      <AppIcon 
        name='heart-pulse' 
        color='#FFF'
        type='MaterialCommunity'
        size={26}  
      />
    </View>
  );
}
