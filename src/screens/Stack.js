import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HeaderChat from '../component/Header';
import Chat from './Chat';
import Contact from './Contact';
import Call from './Calls';
import EditProfile from './EditProfile';
import LoginScreen from './Auth/Login';
import Register from './Auth/Register';
import ForgotPhone from './Auth/ForgotPhone';
import Otp from './Auth/Otp';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  tapTap: {
    backgroundColor: '#075e54',
  },
});

function MyTabs() {
  return (
    <View>
      <HeaderChat />
      <Tab.Navigator
        style={{}}
        tabBarOptions={{
          activeTintColor: 'white',
          labelStyle: {fontWeight: 'bold'},
          indicatorStyle: {backgroundColor: 'white'},
          style: {backgroundColor: '#075e54'},
        }}>
        <Tab.Screen name="CALL" component={Call} />
        <Tab.Screen name="CHAT" component={Chat} />
        <Tab.Screen name="CONTACT" component={Contact} />
      </Tab.Navigator>
    </View>
  );
}

export default function MainScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          <Stack.Screen
            name="Register"
            options={{title: 'Register', headerShown: false}}
            component={Register}
          />
          <Stack.Screen
            name="EditProfile"
            options={{
              title: 'Profile',
              headerShown: true,
              backgroundColor: '#075e54',
            }}
            component={EditProfile}
          />
          <Stack.Screen
            name="MyTab"
            options={{title: 'MyTab', headerShown: false}}
            component={MyTabs}
          />
          <Stack.Screen
            name="LoginScreen"
            options={{
              title: 'Login',
              headerShown: false,
            }}
            component={LoginScreen}
          />
          <Stack.Screen
            name="ForgotPhone"
            options={{
              title: 'Forgot Password',
              headerShown: false,
            }}
            component={ForgotPhone}
          />

          <Stack.Screen
            name="OTP"
            options={{title: 'Succes', headerShown: false}}
            component={Otp}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
