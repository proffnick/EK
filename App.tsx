import React from 'react';
import RNBootSplash from "react-native-bootsplash";
import { NavigationContainer } from '@react-navigation/native';
import { AppBottomTabsNav } from './components/navigation/AppBottomTabsNav';

function App(): React.JSX.Element {
  return (
    <NavigationContainer 
      onReady={ async () => await RNBootSplash.hide({ fade: true })}
      >
      <AppBottomTabsNav />
    </NavigationContainer>
  );
}

export default App;
