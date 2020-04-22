import React from 'react';
import {View, Text, TextInput, StyleSheet, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  header: {
    height: '9%',
    width: '100%',
    backgroundColor: '#075e54',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHeader: {
    color: 'white',
    fontSize: 26,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 0,
  },
  iconView: {
    flexDirection: 'row',
    padding: 1,
  },
  iconHeader: {
    fontSize: 27,
    color: 'white',
    padding: 10,
  },
});

export default function HeaderChat() {
  return (
    <View style={styles.header}>
      <View>
        <View>
          <Text style={styles.textHeader}>ChatMine</Text>
        </View>
      </View>
      <View style={styles.iconView}>
        <View>
          <Icon name="magnify" style={styles.iconHeader} />
        </View>
        <View>
          <Icon name="dots-vertical" style={styles.iconHeader} />
        </View>
      </View>
    </View>
  );
}
