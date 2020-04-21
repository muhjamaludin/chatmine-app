import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Chat from './Chat';
import Contact from './Contact';
import Call from './Calls';

const Tab = createMaterialTopTabNavigator();
const styles = StyleSheet.create({
  tapTap: {
    backgroundColor: '#075e54',
  },
});

export default function MyTabs() {
  return (
    <Tab.Navigator
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
  );
}
