import React from 'react';
import useStyle from '../../assets/style/style';
import { View, TouchableHighlight } from 'react-native';
import { ActionButtonLeftIcon } from './ActionButtonLeftIcon';
import { ActionButtonRightIcon } from './ActionButtonRightIcon';
import { TitleSubTitleText } from './TitleSubTitleText';
import { constants } from '../../utility/cache';

export const ActionButton: React.FC = (): React.JSX.Element => {
  const STYLE = useStyle();
  return(
    <TouchableHighlight style={STYLE.actionButtonPressStyle} onPress={() => null}>
      <View style={STYLE.actionButtonContainerStyle}>
        <ActionButtonLeftIcon />
        <TitleSubTitleText 
          title={constants.title_title} 
          subtitle={constants.title_sub_title}
          />
        <ActionButtonRightIcon />
      </View>
    </TouchableHighlight>
  )
}