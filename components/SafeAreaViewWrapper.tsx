import { 
  SafeAreaView, 
  TouchableWithoutFeedback, 
  Keyboard } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useStyle from '../assets/style/style';

export const SafeAreaViewWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  const STYLES = useStyle();
  return (
    <SafeAreaProvider style={STYLES.frame}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={STYLES.mainContainerSafeArea}>
          {children}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </SafeAreaProvider>
  );
};
