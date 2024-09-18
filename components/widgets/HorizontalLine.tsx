import React from 'react';
import useStyle from '../../assets/style/style';
import { View } from 'react-native';

export const HorizontalLines: React.FC = (): React.JSX.Element => {
  const STYLE = useStyle();
  return(
    <View style={STYLE.horizontalLineContainer}>
      <View style={STYLE.horizontalLine}></View>
    </View>
  )
}