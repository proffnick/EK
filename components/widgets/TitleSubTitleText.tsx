import React from 'react';
import useStyle from '../../assets/style/style';
import { View, Text } from 'react-native';
import { TitleSubTitle } from '../../interfaces';

export const TitleSubTitleText: React.FC<TitleSubTitle> = ({
  title,
  subtitle
}): React.JSX.Element => {
  const STYLE = useStyle();

  return (
   <View style={STYLE.TitleSubTitleContiner}>
      <Text style={STYLE.TileTitleStyle}>{title}</Text>
      <Text style={STYLE.TitleSubTitleStyle}>{subtitle}</Text>
    </View>
  )
}