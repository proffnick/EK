import { Platform } from "react-native"
export default function usePlatform(){
  return {
    isAndroid: Platform.OS === 'android',
    isIos: Platform.OS === 'ios'
  }
}