import React, {useEffect} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import Chat from './Chat';
import Contact from './Contact';
import Call from './Calls';
import RoomChat from './RoomChat';
import EditProfile from './EditProfile';
import LoginScreen from './Auth/Login';
import Welcome from './Auth/Welcome';
import Otp from './Auth/Otp';
import Register from './Auth/Register';
import ForgotPassword from './Auth/ForgotPhone';
import UploadImage from './UplodImage';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  tapTap: {
    backgroundColor: '#075e54',
  },
});

function MyTabs() {
  return (
    <Tab.Navigator
      style={{}}
      tabBarOptions={{
        activeTintColor: 'white',
        labelStyle: {fontWeight: 'bold'},
        indicatorStyle: {backgroundColor: 'white'},
        style: {backgroundColor: '#075e54'},
      }}>
      <Tab.Screen name="Maps" component={Contact}/>
      <Tab.Screen name="CHAT" component={Chat} />
      <Tab.Screen name="PROFILE" component={Call} />
    </Tab.Navigator>
  );
}

function MainScreen(props) {
  console.log('props', props.authData)
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#010101" />
      <Stack.Navigator>
        {props.authData && props.authData.isLogin ? (
          <>
            <Stack.Screen
              name="MyTab"
              options={{title: 'MyTab', headerShown: false}}
              component={MyTabs}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Welcome"
              options={{title: 'Welcome', headerShown: false}}
              component={Welcome}
            />
            <Stack.Screen
              name="Register"
              options={{title: 'Register', headerShown: false}}
              component={Register}
            />
          </>
        )}
        <Stack.Screen
          name="ForgotPassword"
          options={{title: 'Forgot Password', headerShown: true}}
          component={ForgotPassword}
        />
        <Stack.Screen
          name="OTP"
          options={{title: 'Succes', headerShown: false}}
          component={Otp}
        />
        <Stack.Screen
          name="LoginScreen"
          options={{title: 'Login', headerShown: false}}
          component={LoginScreen}
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
          name="RoomChat"
          options={{title: 'RoomChat', headerShown: true}}
          component={RoomChat}
        />
        <Stack.Screen
          name="UploadImage"
          options={{title: 'Upload Image', headerShown: true}}
          component={UploadImage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MapStateToProps = (state) => {
  console.log('status login', state.auth.isLogin);
  return {authData: state.auth};
};

export default connect(MapStateToProps, null)(MainScreen);
