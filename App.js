import React, {useEffect} from 'react';
import MainScreen from './src/screens/Stack';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  });
  return <MainScreen />;
}
