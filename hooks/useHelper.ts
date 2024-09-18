import { StatusBar, Platform, Dimensions } from 'react-native';

export default function useHelper(){
  return {
    formatNumber: (num: number): string => {
      if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
      } else if (num >= 1_000) {
        return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
      } else {
        return num.toString();
      }
    },
    getStatusBarHeight : () => {
      if (Platform.OS === 'android') {
        return StatusBar.currentHeight || 0;
      }
      if (Platform.OS === 'ios') {
        const { height: screenHeight } = Dimensions.get('window');
        if (screenHeight >= 812) {
          return 44; 
        }
        return 20; 
      }
      return 0;
    }

  }
}


