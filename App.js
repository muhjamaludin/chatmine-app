import React, {useEffect} from 'react';
import MainScreen from './src/screens/Stack';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainScreen />
      </PersistGate>
    </Provider>
  );
}
