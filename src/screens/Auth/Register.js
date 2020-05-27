import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/AuthActions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AllStyles } from '../../styles/Styles';

const styles = StyleSheet.create({
  viewRegister: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '0%',
  },
  flexRegister: {
    flexDirection: 'row',
    justifyContent: "center",
    bottom: 40
  },
  box1: {
    width: '25%',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    backgroundColor: 'white',
    borderColor: '#f7f7f7'
  },
  box2: {
    width: '70%',
    borderRightWidth: 1,
    borderTopWidth: 1,
    backgroundColor: 'white',
    borderColor: '#f7f7f7'
  },
  box3: {
    width: '25%',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderColor: '#f7f7f7'
  },
  box4: {
    width: '70%',
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderColor: '#f7f7f7'
  },
  text1: {
    marginLeft: 20,
    fontSize: 15,
  }
});

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
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <View style={styles.viewRegister}>
          <Text style={{ fontSize: 36 }}> Register </Text>
        </View>
        <View style={{height: '30%',  }}>
          <View style={styles.flexRegister}>
            <View style={styles.box1}>
              <Text style={styles.text1}>Name</Text>
            </View>
            <View style={styles.box2}>
              <TextInput
                onChangeText={(text) => setName(text)}
                placeholder="nama"
                style={styles.text1}
              />
            </View>
          </View>
          <View style={styles.flexRegister}>
            <View style={styles.box1}>
              <Text style={styles.text1} >Email</Text>
            </View>
            <View style={styles.box2}>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                placeholder="email"
                style={styles.text1}
              />
            </View>
          </View>
          <View style={styles.flexRegister}>
            <View style={styles.box1}>
              <Text style={styles.text1}>Phone</Text>
            </View>
            <View style={styles.box2}>
              <TextInput
                onChangeText={(text) => setPhone(text)}
                placeholder="phone"
                style={styles.text1}
              />
            </View>
          </View>
          <View style={styles.flexRegister}>
            <View style={styles.box1}>
              <Text style={styles.text1} >Password</Text>
            </View>
            <View style={styles.box2}>
              <TextInput
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                placeholder="password"
                style={styles.text1}
              />
            </View>
          </View>
          <View style={styles.flexRegister}>
            <View style={styles.box3}>
              <Text style={styles.text1} >Re-enter</Text>
              <Text style={styles.text1}>Password</Text>
            </View>
            <View style={styles.box4}>
              <TextInput style={styles.text1} secureTextEntry={true} placeholder="re-renter password" />
            </View>
          </View>
        </View>
        <View style={AllStyles.viewButton}>
          <View style={AllStyles.specButton}>
            <Button
              style={AllStyles.forButton}
              color="#00BFA6"
              onPress={onSubmit}
              title="Create Account"
            />
          </View>
        </View>
      </View>
    </>
  );
}

const MapStateToProps = (state) => {
  return {
    authData: state.auth,
  };
};

export default connect(null, { register })(Register);
