import React from 'react';
import {Text, View, Image, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  viewPicture: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '55%',
  },
  viewEdit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picture: {
    width: 175,
    height: 175,
    borderRadius: 175,
  },
  icon: {
    fontSize: 26,
  },
});

export default function EditProfile() {
  return (
    <View>
      <View style={styles.viewPicture}>
        <Image
          source={require('../files/jessica_veranda.jpg')}
          style={styles.picture}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Icon style={styles.icon} name="account" />
        </View>
        <View style={styles.viewEdit}>
          <View>
            <Text>Nama</Text>
            <TextInput />
          </View>
          <View>
            <Icon style={styles.icon} name="pencil" />
          </View>
        </View>
      </View>
      <View style={styles.viewEdit}>
        <View>
          <Icon style={styles.icon} name="account" />
        </View>
        <View>
          <Text>Info</Text>
          <TextInput />
        </View>
        <View>
          <Icon style={styles.icon} name="pencil" />
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Icon style={styles.icon} name="account" />
        </View>
        <View>
          <Text>Telepon</Text>
          <TextInput />
        </View>
      </View>
    </View>
  );
}
