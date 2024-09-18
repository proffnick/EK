import React from 'react';
import useStyle from '../../assets/style/style';
import { View, ActivityIndicator } from 'react-native';
import { LoaderProps } from '../../interfaces';

export const SimpleLoader: React.FC<LoaderProps> = ({ loading }) => {
  const STYLE = useStyle();
  if (!loading) return null; 
  return (
    <View style={STYLE.loaderContainer}>
      <ActivityIndicator 
        size={'large'} 
        color={STYLE.loaderCircle.backgroundColor} 
      />
    </View>
  );
};
