import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, Image } from 'react-native';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { setLogin } from '../../redux/actions/AuthActions';
import { connect } from 'react-redux';

import { AllStyles } from '../../styles/Styles';

const styles = StyleSheet.create({
  cardBox: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    height: 300,
    backgroundColor: 'white',
    marginHorizontal: 80,
    borderRadius: 10,
    justifyContent: 'space-between'
  },
  iconShadow: {
    fontSize: 40,
    padding: 15,
    borderRadius: 40,
    paddingHorizontal: 20,
    backgroundColor: '#ACACAC',
    color: 'white'
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    // shadowOpacity: 0.36,
    // shadowRadius: 6.68,

    // elevation: 11,
  }
  // wrap: {
  //   flex: 1,
  //   justifyContent: 'center'
  // },
  // viewHeader: {
  //   width: '100%',
  //   height: '10%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // textHeader: {
  //   fontSize: 26,
  //   color: '#000',
  //   fontFamily: 'serif',
  // },
  // textVerif: {
  //   width: '90%',
  //   alignItems: 'center',
  //   textAlign: 'center',
  // },
  // viewInput: {
  //   flexDirection: 'row',
  //   backgroundColor: 'red',
  //   justifyContent: 'center',
  // },
  // textMyNumber: {
  //   color: '#00B0FF',
  // },
  // viewNumber: {
  //   flexDirection: 'row',
  //   height: '10%',
  //   alignItems: 'center',
  //   borderWidth: 1,

  // }, 
  // textOpacity: {
  //   opacity: 0.5,
  // },
  // modal: {
  //   width: '80%',
  // },
  // viewFont: {
  //   width: '35%',
  //   alignItems: 'flex-end',
  // },
  // iconFont: {
  //   fontSize: 18,
  // },
  // textFont: {
  //   marginLeft: 10,
  //   borderWidth:1
  // },
  // viewButton: {
  //   width: '100%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: 20,
  // },
  // specButton: {
  //   width: '80%',
  //   alignItems: 'center',
  // },
  // textAkun: {
  //   textDecorationLine: 'underline',
  //   fontSize: 16,
  // },
});

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError] = useState(null);

  const checkemail = () => {
    console.log('check email');
    const req = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!req.test(email)) {
      setEmail({ emailError: 'Email anda salah' });
    } else {
      setPassword({ emailError: null });
    }
  };

  const onSubmit = () => {
    props.setLogin(email, password, (success) => { });
  };
  return (
    <>
      {/* <View style={styles.viewHeader}>
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
                style={{width: 100}}
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
                style={{width: 100}}
              />
            </View>
          </View>
          <View style={styles.viewHeader}>
              <Text
                onPress={() => props.navigation.navigate('ForgotPassword')}
                style={styles.textOpacity}>
                Forgot password ?
              </Text>
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
        </View> */}
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <View style={{alignItems: "center"}}>
          <Text style={{fontSize: 33}} >Sign In</Text>
        </View>
        <View style={styles.cardBox}>
          <View style={{ alignItems: 'center', top: 20 }} >
            <Icon style={styles.iconShadow} name="md-person" />
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <View style={{ borderBottomWidth: 1, width: 200, alignItems: 'center' }}>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                placeholder="email" />
            </View>
            <View style={{ borderBottomWidth: 1, width: 200, alignItems: 'center' }}>
              <TextInput
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                placeholder="password" />
            </View>
          </View>
          <TouchableOpacity style={AllStyles.forButton}>
            <Button
              type="outline"
              color="#00BFA6"
              onPress={onSubmit}
              title={'LOGIN'}
            />
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 18}}>Don't have an account ? </Text>
          <Text style={{fontSize: 20, textDecorationLine: 'underline'}} 
            onPress={() => props.navigation.navigate('Register')}
          > Sign Up</Text>
        </View>
      </View>
    </>
  );
}

export default connect(null, { setLogin })(Login);
