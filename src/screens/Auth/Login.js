import React, {useState} from 'react';
import {Text, View, Button, StyleSheet, TextInput} from 'react-native';
import {Input} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {setLogin} from '../../redux/actions/AuthActions';
import {connect} from 'react-redux';

import {AllStyles} from '../../styles/Styles';

const styles = StyleSheet.create({
  viewHeader: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    fontSize: 26,
    color: '#000',
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
  },
  textOpacity: {
    opacity: 0.5,
  },
  modal: {
    width: '80%',
  },
  viewFont: {
    width: '35%',
    alignItems: 'flex-end',
  },
  iconFont: {
    fontSize: 18,
  },
  textFont: {
    marginLeft: 10,
  },
  viewButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  specButton: {
    width: '80%',
    alignItems: 'center',
  },
  textAkun: {
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError] = useState(null);

  const checkemail = () => {
    console.log('check email');
    const req = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!req.test(email)) {
      setEmail({emailError: 'Email anda salah'});
    } else {
      setPassword({emailError: null});
    }
  };

  const onSubmit = () => {
    props.setLogin(email, password, (success) => {});
  };
  return (
    <>
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>Sign In</Text>
      </View>
      <View style={styles.viewNumber}>
        <View style={styles.viewFont}>
          <Icon style={styles.iconFont} name="email" />
        </View>
        <View style={styles.textFont}>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            placeholder="email"
            // onBlur={checkemail}
            // errorStyle={{color: 'red'}}
            // errorMessage={emailError ? false : 'Silahkan masukan email anda'}
          />
        </View>
      </View>
      <View style={styles.viewNumber}>
        <View style={styles.viewFont}>
          <Icon name="key" style={styles.iconFont} />
        </View>
        <View style={styles.textFont}>
          <TextInput
            secureTextEntry={true}
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
      <View style={AllStyles.viewButton}>
        <View style={AllStyles.specButton}>
          <TouchableOpacity style={AllStyles.forButton}>
            <Button
              type="outline"
              color="#00BFA6"
              onPress={onSubmit}
              title={'LOGIN'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewButton}>
        <View style={styles.specButton}>
          <Text
            style={styles.textAkun}
            onPress={() => props.navigation.navigate('Register')}>
            Create Account
          </Text>
        </View>
      </View>
    </>
  );
}

export default connect(null, {setLogin})(Login);
