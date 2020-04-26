import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import {register} from '../../redux/actions/AuthActions';

function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    props.register(email, password, name, phone, (success) => {
      props.navigation.navigate('LoginScreen');
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

export default connect(null, {register})(Register);
