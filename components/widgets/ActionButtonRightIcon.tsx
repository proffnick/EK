import React from 'react';
import useStyle from '../../assets/style/style';
import { View } from 'react-native';
import { AppIcon } from '../../assets/style/AppIcons';

export const ActionButtonRightIcon: 
  React.FC = (): 
  React.JSX.Element => {
  const STYLE = useStyle();
  return(
    <View style={STYLE.actionButtonRightIcon}>
      <AppIcon 
        name='chevron-right' 
        color='#333333'
        type='MaterialCommunity'
        size={24}  
      />
    </View>
  );
}
