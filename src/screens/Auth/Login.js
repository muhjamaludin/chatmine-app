import React, {useState} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {setLogin} from '../../redux/actions/AuthActions';
import {connect} from 'react-redux';

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

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    props.setLogin(email, password, (success) => {});
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
          <Text
            onPress={() => props.navigation.navigate('ForgotPassword')}
            style={styles.textOpacity}>
            Forgot password ?
          </Text>
        </View>
      </View>
      <View style={styles.viewHeader}>
        <TouchableOpacity>
          <Button type="outline" onPress={onSubmit} title={'LOGIN'} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewHeader}>
        <Text onPress={() => props.navigation.navigate('Register')}>
          Buat Akun
        </Text>
      </View>
    </>
  );
}

export default connect(null, {setLogin})(Login);
