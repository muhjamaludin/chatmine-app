import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const users = [
  {
    id: 1,
    pic: require('../files/dian_sastro.jpg'),
    name: 'Dian Sastrowardoyo',
    msg: 'Sayang',
    theTime:
      'Hari ini ' + new Date().getHours() + '.' + new Date().getMinutes(),
  },
  {
    id: 2,
    pic: require('../files/mikha_tambayong.jpeg'),
    name: 'Mikha Tambayong',
    msg: 'Hay Baby',
    theTime:
      'Hari ini ' + new Date().getHours() + '.' + new Date().getMinutes(),
  },
  {
    id: 9,
    pic: require('../files/jessica_veranda.jpg'),
    name: 'Jessica Veranda',
    msg: 'Semangat Yah 🤗️',
    theTime:
      'Hari ini ' + new Date().getHours() + '.' + new Date().getMinutes(),
  },
  {
    id: 3,
    pic: require('../files/dian_sastro.jpg'),
    name: 'Dian Sastrowardoyo',
    msg: 'Sayang',
    theTime:
      'Hari ini ' + new Date().getHours() + '.' + new Date().getMinutes(),
  },
  {
    id: 4,
    pic: require('../files/mikha_tambayong.jpeg'),
    name: 'Mikha Tambayong',
    msg: 'Hay Baby',
    theTime:
      'Hari ini ' + new Date().getHours() + '.' + new Date().getMinutes(),
  },
  {
    id: 5,
    pic: require('../files/jessica_veranda.jpg'),
    name: 'Jessica Veranda',
    msg: 'Semangat Yah 🤗️',
    theTime:
      'Hari ini ' + new Date().getHours() + '.' + new Date().getMinutes(),
  },
  {
    id: 6,
    pic: require('../files/dian_sastro.jpg'),
    name: 'Dian Sastrowardoyo',
    msg: 'Sayang',
    theTime:
      'Hari ini ' + new Date().getHours() + '.' + new Date().getMinutes(),
  },
  {
    id: 7,
    pic: require('../files/mikha_tambayong.jpeg'),
    name: 'Mikha Tambayong',
    msg: 'Hay Baby',
    theTime:
      'Hari ini ' + new Date().getHours() + '.' + new Date().getMinutes(),
  },
  {
    id: 8,
    pic: require('../files/jessica_veranda.jpg'),
    name: 'Jessica Veranda',
    msg: 'Semangat Yah 🤗️',
    theTime:
      'Hari ini ' + new Date().getHours() + '.' + new Date().getMinutes(),
  },
  {
    id: 10,
    pic: require('../files/dian_sastro.jpg'),
    name: 'Dian Sastrowardoyo',
    msg: 'Sayang',
    theTime:
      'Hari ini ' + new Date().getHours() + '.' + new Date().getMinutes(),
  },
  {
    id: 11,
    pic: require('../files/mikha_tambayong.jpeg'),
    name: 'Mikha Tambayong',
    msg: 'Hay Baby',
    theTime:
      'Hari ini ' + new Date().getHours() + '.' + new Date().getMinutes(),
  },
  {
    id: 12,
    pic: require('../files/jessica_veranda.jpg'),
    name: 'Jessica Veranda',
    msg: 'Semangat Yah 🤗️',
    theTime:
      'Hari ini ' + new Date().getHours() + '.' + new Date().getMinutes(),
  },
  {
    id: 13,
    pic: require('../files/mikha_tambayong.jpeg'),
    name: 'Mikha Tambayong',
    msg: 'Hay Baby',
    theTime:
      'Hari ini ' + new Date().getHours() + '.' + new Date().getMinutes(),
  },
  {
    id: 14,
    pic: require('../files/jessica_veranda.jpg'),
    name: 'Jessica Veranda',
    msg: 'Semangat Yah 🤗️',
    theTime:
      'Hari ini ' + new Date().getHours() + '.' + new Date().getMinutes(),
  },
  {
    id: 15,
    pic: require('../files/dian_sastro.jpg'),
    name: 'Dian Sastrowardoyo',
    msg: 'Sayang',
    theTime:
      'Hari ini ' + new Date().getHours() + '.' + new Date().getMinutes(),
  },
  {
    id: 16,
    pic: require('../files/mikha_tambayong.jpeg'),
    name: 'Mikha Tambayong',
    msg: 'Hay Baby',
    theTime:
      'Hari ini ' + new Date().getHours() + '.' + new Date().getMinutes(),
  },
  {
    id: 17,
    pic: require('../files/jessica_veranda.jpg'),
    name: 'Jessica Veranda',
    msg: 'Semangat Yah 🤗️',
    theTime:
      'Hari ini ' + new Date().getHours() + '.' + new Date().getMinutes(),
  },
];

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
  },
  viewPic: {
    padding: 5,
  },
  pic: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  viewText: {
    paddingLeft: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: '#e8e8e8',
    width: '80%',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  opacityText: {
    opacity: 0.5,
  },
  viewCall: {
    flexDirection: 'row',
  },
  viewPhone: {
    justifyContent: 'center',
  },
  phone: {
    fontSize: 36,
    color: '#075e5',
  },
});

export default function Call() {
  return (
    <ScrollView scrollEventThrottle={8}>
      {users.map((item, i) => (
        <View key={users[i].id} style={styles.card}>
          <View style={styles.viewPic}>
            <Image style={styles.pic} source={users[i].pic} />
          </View>
          <View style={styles.viewCall}>
            <View style={styles.viewText}>
              <Text style={styles.boldText}>{users[i].name}</Text>
              <Text style={styles.opacityText}>{users[i].theTime}</Text>
            </View>
            <View style={styles.viewPhone}>
              <Icon name="phone" style={styles.phone} />
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
