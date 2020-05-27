import React from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  viewButton: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  specButton: {
    width: '60%',
    borderRadius: 20,
  },
  forButton: {
    borderRadius: 20,
  },
  viewCome: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCome: {
    fontSize: 24,
    fontFamily: 'roboto',
    color: '#00BFA6',
  },
  viewIlustration: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ilustration: {
    width: '80%',
    height: '80%',
  },
  viewTerm: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTerm: {
    fontFamily: 'robot',
    width: '90%',
  },
  blueTerm: {
    color: '#00B0FF',
  },
});

export default function EditProfile({navigation}) {
  return (
    <>
      <View>
        <View style={styles.viewCome}>
          <Text style={styles.textCome}>Selamat Datang di ChatMe</Text>
        </View>
        <View style={styles.viewIlustration}>
          <Image
            style={styles.ilustration}
            source={require('../../files/welcome.png')}
          />
        </View>
        <View style={styles.viewTerm}>
          <Text style={styles.textTerm}>
            Baca <Text style={styles.blueTerm}> Kebijakan Privasi </Text> kami.
            Ketuk "Setuju dan lanjutkan" untuk menerima{' '}
            <Text style={styles.blueTerm}> Ketentuan Layanan </Text>.
          </Text>
        </View>
        <View style={styles.viewButton}>
          <View style={styles.specButton}>
            <Button
              title={'Setuju dan Lanjutkan'}
              color="#00BFA6"
              style={styles.forButton}
              onPress={() => navigation.navigate('LoginScreen')}
            />
          </View>
        </View>
      </View>
    </>
  );
}
