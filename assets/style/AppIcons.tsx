import React from 'react';
import useStyle from './style';
import OctIcons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome6Pro';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { IconsProps } from '../../interfaces';

/***
 * This is a default application Icon's library
 * Component. We use many icons packages in order to
 * find the most appropriate icons in the design. 
 * It can be reused anytime anyday in any react native project
 *  
 * To check which icon to use, check https://github.com/oblador/react-native-vector-icons?tab=readme-ov-file
 * 
 * ***/

export const AppIcon: React.FC<IconsProps> = ({
  name = "home-account",
  size = 24,
  color = "",
  style = {},
  type = ""
}): React.JSX.Element => {
  const STYLES = useStyle();
  /*
    Many font library is used here 
    because I want to get the best 
    fit for any icon regardless
  */
  if(type === "FontAwesome"){
    return (
      <FontAwesomeIcons
          name={name}
          size={size}
          color={color ? color : STYLES.iconsColor.color}
          style={{ ...style }}
        />
    );
  }else if(type === "Feather"){
    return(
      <FeatherIcon
          name={name}
          size={size}
          color={color ? color : STYLES.iconsColor.color}
          style={{ ...style }}
        />
    );
  }else if(type === "MaterialIcon"){
    return (
      <MaterialIcon
        name={name}
        size={size}
        color={color ? color : STYLES.iconsColor.color}
        style={{ ...style }}
      />
    );
  }else if(type === "MaterialCommunity"){
    return (
      <MaterialCommunityIcons
        name={name}
        size={size}
        color={color ? color : STYLES.iconsColor.color}
        style={{ ...style }}
      />
    );
  }else if(type === "IonIcons"){
    return (
      <IonIcons
        name={name}
        size={size}
        color={color ? color : STYLES.iconsColor.color}
        style={{ ...style }}
      />
    );
  }else{
    return (
      <OctIcons
        name={name}
        size={size}
        color={color ? color : STYLES.iconsColor.color}
        style={{ ...style }}
      />
    );
  }
};
