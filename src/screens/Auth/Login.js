import React from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewHeader: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    fontSize: 20,
    color: '#00BF2E',
    fontFamily: 'serif',
  },
  textVerif: {
    width: '90%',
    alignItems: 'center',
    textAlign: 'center',
  },
  textMyNumber: {
    color: '#00B0FF',
  },
  viewNumber: {
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textOpacity: {
    opacity: 0.5,
  },
});

export default function EditProfile({navigation}) {
  return (
    <>
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>Masukkan nomor telepon Anda</Text>
      </View>
      <View style={styles.viewHeader}>
        <Text style={styles.textVerif}>
          ChatMine akan mengirim SMS untuk memverifikasi nomor telepon Anda.{' '}
          <Text style={styles.textMyNumber}>Berapa nomor saya ?</Text>
        </Text>
      </View>
      <View style={styles.viewHeader}>
        <Text>Negara</Text>
      </View>
      <View style={styles.viewNumber}>
        <Text>+62</Text>
        <TextInput placeholder={'nomor telepon'} />
      </View>
      <View style={styles.viewHeader}>
        <View>
          <Text style={styles.textOpacity}>
            Biaya SMS operator mungkin berlaku
          </Text>
        </View>
      </View>
      <View style={styles.viewHeader}>
        <Button onPress={() => navigation.navigate('MyTab')} title={'LANJUT'} />
      </View>
    </>
  );
}
