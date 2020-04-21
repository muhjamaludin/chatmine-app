import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HeaderChat from './src/component/Header';
import Tab from './src/screens/Stack';

export default function App() {
  return (
    <NavigationContainer>
      <HeaderChat />
      <Tab />
    </NavigationContainer>
  );
}
