export interface VideoObject {
  id: number;
  likes_count: number;
  comments_count: number;
  urls: {
    mp4: string;
    mov: string;
    hls: {
      playlist: string;
      files: string[];
    };
  };
}

export interface ReelData{
  DATA: VideoObject[]
}

export interface Constants{
  cached_in_text?: string,
  cache_prefix: string,
  cache_time: number,
  logo_image_width: number,
  logo_image_height: number,
  profile_height: number,
  profile_width: number,
  welcome_text: string,
  action_text: string,
  title_title: string,
  title_sub_title: string,
  media_title: string,
  upload_text: string,
  default_icon_size: number,
  report_icon_size: number
}

export interface IconsProps{
  name: string,
  size?: number,
  color?: string,
  style?: object,
  type?: 'FontAwesome' | 'Feather' | 'MaterialIcon' | 'MaterialCommunity' | 'IonIcons' | undefined
}

export interface ImgIconsProps{
  size?: { width: number, height: number},
  icon: any,
  style?: object
}

export interface WelcomeAccountText{
  text?: string,
  TextStyle?: object,
  containerStyle?: object,
  isTitleWIthIcon?: boolean | false,
  iconName?: string
}

export interface TitleSubTitle{
  title: string,
  subtitle: string
}

export interface ReelVideoItemProps{
  url: string,
  index: number,
  containerStyle: object,
  reference?: any,
  onPress: Function,
  isFullVideo?: boolean,
  videoDetails?: VideoObject,
  currentIndex?: number,
  isPaused: boolean
}

export interface LoaderProps{
  loading: boolean
}
export interface UploadButtonProp{
  onPress: Function
}

export interface TopNavProps{
  isMedia?: boolean
}

export interface FullVideoView{
  videos: VideoObject[],
  index: number
}

export interface VideoStatProps{
  likes: number,
  comments: number
}