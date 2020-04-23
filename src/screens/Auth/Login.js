import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

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
  viewInput: {
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'center',
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
  modal: {
    width: '80%',
  },
  iconFont: {
    fontSize: 18,
  },
});

export default function EditProfile({navigation}, props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        auth().onAuthStateChanged((userData) => {
          const id = userData._user.uid;
          database()
            .ref(`/UserList/${id}`)
            .once('value')
            .then((snapshot) => {
              navigation.navigate('MyTab', snapshot.val());
              console.log('User data: ', snapshot.val());
            });
        });
      })
      .catch((err) => {
        console.log(err.code);
        if (err.code === 'auth/wrong-password') {
          ToastAndroid.show('Wrong Password', ToastAndroid.SHORT);
        }
      });
  };
  return (
    <>
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>Masuk Otentifikasi Anda</Text>
      </View>
      <View style={styles.viewNumber}>
        <View>
          <Icon style={styles.iconFont} name="email" />
        </View>
        <View>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            placeholder="email"
          />
        </View>
      </View>
      <View style={styles.viewNumber}>
        <View>
          <Icon name="key" style={styles.iconFont} />
        </View>
        <View>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder="password"
          />
        </View>
      </View>
      <View style={styles.viewHeader}>
        <View>
          <Text style={styles.textOpacity}>Forgot password ?</Text>
        </View>
      </View>
      <View style={styles.viewHeader}>
        <TouchableOpacity>
          <Button type="outline" onPress={onSubmit} title={'LOGIN'} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewHeader}>
        <Text onPress={() => navigation.navigate('Register')}>Buat Akun</Text>
      </View>
    </>
  );
}
