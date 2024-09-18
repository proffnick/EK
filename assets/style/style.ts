import { 
  StyleSheet, 
  Platform, 
  Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import useHelper from '../../hooks/useHelper';

export default function useStyle() {
  const { getStatusBarHeight } = useHelper();
  return StyleSheet.create({
    mainContainerSafeArea: {
      backgroundColor: '#FFFFFF',
      flex: 1,
      minHeight: '100%',
    },

    frame: {
      flex: 1,
      position: 'relative',
    },

    iconsColor: {
      color: '#0A0C0B'
    }, 
    horizontalLineContainer:{
      paddingHorizontal: 15,
      minWidth: '100%',
      marginTop: 15,
      marginBottom: 5,
    },
    horizontalLine:{
      height: .2,
      backgroundColor: '#C9CCD1',
      paddingHorizontal: 15,
      minWidth: '100%'
    },

    homeNavContainer: {
      flex: 1,
      minWidth: '100%',
      minHeight: 57,
      maxHeight: 57,
      flexDirection: 'row',
      alignItems: 'center', 
      justifyContent: 'space-between',
      borderBottomWidth: .2,
      borderBottomColor: '#C9CCD1',
      paddingHorizontal: 15
    },

    homeNavContainerMedia:{
      zIndex: 9999,
      position: `absolute`,
      top: getStatusBarHeight(),
      left: 0,
      borderBottomWidth: 0,
      borderBottomColor: 'transparent',
    },

    mediaNavTitle:{ 
      fontWeight: '600',
      lineHeight: 27,
      fontSize: 23,
      color: '#FFFFFF'
    },

    homeNavLogoView:{
      flex: 2,
      maxHeight: 57,
      alignItems: 'flex-start',
      justifyContent: 'center',
      alignContent: 'center',
      paddingBottom: 10
    },

    navIconsSection: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 1
    },
    navIconsSectionMedia: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },

    imgIcons: {
      width: 20,
      height: 20,
    },
    
    logoStyle:{
      maxWidth: 180,
      maxHeight: 29
    },

    welcomeTextContainerStyle: {
      alignContent: 'center',
      justifyContent: 'center',
      marginVertical: 15,
      paddingHorizontal: 15
    },

    titleWithIconContainer: {
      alignItems: 'center',
      alignContent: 'flex-start',
      marginBottom: 10,
      flexDirection: 'row',
      minWidth: '100%'
    },

    titleWithIconContainerInner:{
      paddingHorizontal: 15
    },

    welcomeTextStyle:{
      fontSize: 22,
      fontWeight: '600',
      lineHeight: 26.26,
      textAlign: 'center',
      color: '#0A0C0B',
    },

    actionTextContainerStyle: {
      alignContent: 'flex-start',
      marginVertical: 15,
      paddingHorizontal: 15
    },

    actionTextStyle:{
      fontSize: 20,
      fontWeight: '500',
      lineHeight: 24,
      textAlign: 'left',
      color: '#0A0C0B',
    },

    leadingTitleTextStyle:{
      textAlign: 'left',
      marginLeft: 15
    },

    actionButtonContainerStyle:{
      borderRadius: 12,
      height: 63.25,
      width: '100%',
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'space-between',
      borderColor: '#D3D3D3',
      borderWidth: 0.2,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
        },
        android: {
          elevation: 5,
        },
      }),
      backgroundColor: '#F6F1E2'
    },

    actionButtonPressStyle:{
      paddingHorizontal: 15
    },

    actionButtonLeftIcon:{
      padding: 15,
      borderTopLeftRadius: 12,
      borderBottomLeftRadius: 12,
      backgroundColor: '#34A653',
      alignItems: 'center',
      justifyContent: 'center'
    },

     actionButtonRightIcon:{
      padding: 15,
      backgroundColor: '',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'row'
    },
    TileTitleStyle: {
      fontSize: 17, 
      fontWeight: '600',
      textAlign: 'center',
      lineHeight: 24,
      color: '#0A0C0B'
    },

    TitleSubTitleStyle: {
      fontSize: 14,
      textAlign: 'center',
      fontWeight: '400',
      lineHeight: 24
    },

    TitleSubTitleContiner:{
      flexGrow: 1,
      alignSelf: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },

    reelVideoItemContainer: {
      flex: 1,
      justifyContent: 'center',
      borderTopLeftRadius:12,
      borderTopRightRadius:12,
      borderBottomLeftRadius:12,
      borderBottomRightRadius:12,
      overflow: 'hidden',
      maxHeight: 374
    },

    reelVideoItemVideo: {
      width: '100%',
      height: 374,
      borderRadius: 12
    },

    loaderContainer: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999, 
    },

    loaderCircle: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#ccc', 
      opacity: 0.8,
    },

    VideoReelContainer: {
      justifyContent: 'center',
      backgroundColor: '#fff',
      paddingHorizontal: 15
    },

    VideoReelContainerFull: {
      flex: 1,
      justifyContent: 'center',
      margin: 0,
      padding: 0,
      top: 0,
      left: 0,
      bottom: 0
    },

    fullVideoItem: {
      width: width,
      height: height,
      justifyContent: 'center',
      alignItems: 'center',
    },

    FullVideo: {
      width: width,
      height: height,
    },

    VideoReelPreview: {
      width: width * 0.5,
    },

    VideoReelItem: {
      height: 320,
      marginHorizontal: 4, 
      borderRadius: 15,
    },

    uploadButtonPress:{
      paddingHorizontal: 15,
    },

    uploadButtonConatiner: {
      width: '100%',
      height: 41.13,
      backgroundColor: '#3361BA',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderRadius: 8,
      marginVertical: 15
    },

    uploadButtonText:{
      textAlign: 'left',
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 18,
      color: '#FFFFFF',
      marginLeft: 8
    },

    videoStatContainer:{
      maxWidth: 50,
      position: 'absolute',
      bottom: 80,
      zIndex: 9999,
      right: 15,
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'space-evenly'
    },

    videoStatsCommentsLikesText:{ 
      color: '#FFFFFF', 
      fontSize: 14, 
      lineHeight: 16, 
      fontWeight: 600, 
      textAlign: 'center' 
    },

    videoStatsItemsContainers:{
      marginBottom: 10, 
      flexDirection: 'column'
    },

    videoStatsCommentsLikesmargins:{
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
}
