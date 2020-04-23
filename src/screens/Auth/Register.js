import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import {connect} from 'react-redux';
import {insertNewUser} from '../../redux/actions/AuthActions';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log(email, password);
        auth().onAuthStateChanged((userData) => {
          database()
            .ref('User/' + userData.uid)
            .set({
              name: name,
              status: 'online',
              phone: phone,
              email: email,
              photo:
                'https://cdn2.iconfinder.com/data/icons/men-women-from-all-over-the-world-1/93/man-woman-people-person-avatar-face-user_49-512.png',
              uid: userData.uid,
            })
            .catch((error) => console.log(error.message));
        });
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.log(error);
      });
  };

  return (
    <>
      <View>
        <Text> Register </Text>
      </View>
      <View>
        <Text>Nama</Text>
        <TextInput onChangeText={(text) => setName(text)} placeholder="nama" />
      </View>
      <View>
        <Text>Email</Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          placeholder="email"
        />
      </View>
      <View>
        <Text>Phone</Text>
        <TextInput
          onChangeText={(text) => setPhone(text)}
          placeholder="phone"
        />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          placeholder="password"
        />
      </View>
      <View>
        <Text>Re-enter Password</Text>
        <TextInput placeholder="re-renter password" />
      </View>
      <View>
        <Button onPress={onSubmit} title="Buat Akun" />
      </View>
    </>
  );
}

export default connect(null, {insertNewUser})(Register);
