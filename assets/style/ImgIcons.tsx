import { Image } from 'react-native';
import useStyle from './style';
import { ImgIconsProps } from '../../interfaces';

export const ImgIcons: 
React.FC<ImgIconsProps> = ({ size, icon, style = {} }): 
React.JSX.Element => {
  const STYLE = useStyle();
  return(
    <Image 
      width={size? size.width: STYLE.imgIcons.width}
      height={size? size.height: STYLE.imgIcons.height}
      source={icon}
      style={style}
    />
  );
}


