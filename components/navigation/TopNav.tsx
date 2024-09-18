import { 
  View, 
  TouchableOpacity, 
  Image, 
  Text } from 'react-native';
import React from 'react';
import useStyle from '../../assets/style/style';
import { ImgIcons } from '../../assets/style/ImgIcons';
import { constants } from '../../utility/cache';
import { TopNavProps } from '../../interfaces';
import { AppIcon } from '../../assets/style/AppIcons';

/***
 * This is a multi-purpose top navbar
 * that's used for both screens including the 
 * Media screen, when the [isMedia] props
 * is provided and it is equal to true
 * the styling chnages to support
 * the look you see on the Media screen.
 * ***/

export const TopNav:
React.FC<TopNavProps> = ({ isMedia }):
React.JSX.Element => {
  const STYLE = useStyle();
  return (
    <View style={[
      STYLE.homeNavContainer, 
      ...(isMedia ? 
      [STYLE.homeNavContainerMedia]: 
      [{}])]}>
      <View style={STYLE.homeNavLogoView}>
        <TouchableOpacity onPress={() => null}>
          {!isMedia &&<Image 
            width={constants.logo_image_width}
            height={constants.logo_image_height}
            source={require('../../assets/logoek.png')}
            alt=""
            style={STYLE.logoStyle}
          />}
          {
          isMedia && (
          <Text style={STYLE.mediaNavTitle}>
            {constants.media_title}
            </Text>)
          }
        </TouchableOpacity>
      </View>
      <View style={[
        STYLE.navIconsSection, 
        ...(isMedia ? 
        [STYLE.navIconsSectionMedia]: 
        [{}])]}>
        {!isMedia && <>
        <View>
          <ImgIcons 
            size={{height: 20, width: 20}} 
            icon={require('../../assets/search.png')} 
            />
        </View>
        <View>
          <ImgIcons 
          size={{height: 20, width: 20}} 
          icon={require('../../assets/message.png')} 
          />
        </View>
        <View>
          <ImgIcons 
            size={{height: 20, width: 20}} 
            icon={require('../../assets/note.png')} 
          />
        </View>
        </>}
        {
        isMedia&&<View><AppIcon 
          name='videocam-outline' 
          color='#FFFFFF' 
          type='IonIcons'  
          /></View>
        }
      </View>
    </View>
  );
}



