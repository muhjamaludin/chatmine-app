import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HeaderChat from './src/component/Header';
import Tab from './src/screens/Stack';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NavigationContainer>
      <HeaderChat />
      <Tab />
    </NavigationContainer>
  );
}
