import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {register} from '../../redux/actions/AuthActions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AllStyles} from '../../styles/Styles';

const styles = StyleSheet.create({
  viewRegister: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
  },
  flexRegister: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text1: {
    width: '20%',
    marginLeft: 20,
  },
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
      <View style={styles.viewRegister}>
        <Text style={{fontSize: 36}}> Register </Text>
      </View>
      <View style={styles.flexRegister}>
        <View style={styles.text1}>
          <Text>Nama</Text>
        </View>
        <View>
          <TextInput
            onChangeText={(text) => setName(text)}
            placeholder="nama"
          />
        </View>
      </View>
      <View style={styles.flexRegister}>
        <View style={styles.text1}>
          <Text>Email</Text>
        </View>
        <View>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            placeholder="email"
          />
        </View>
      </View>
      <View style={styles.flexRegister}>
        <View style={styles.text1}>
          <Text>Phone</Text>
        </View>
        <View>
          <TextInput
            onChangeText={(text) => setPhone(text)}
            placeholder="phone"
          />
        </View>
      </View>
      <View style={styles.flexRegister}>
        <View style={styles.text1}>
          <Text>Password</Text>
        </View>
        <View>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder="password"
          />
        </View>
      </View>
      <View style={styles.flexRegister}>
        <View style={styles.text1}>
          <Text>Re-enter Password</Text>
        </View>
        <View>
          <TextInput placeholder="re-renter password" />
        </View>
      </View>
      <View style={AllStyles.viewButton}>
        <View style={AllStyles.specButton}>
          <Button
            style={AllStyles.forButton}
            onPress={onSubmit}
            title="Buat Akun"
          />
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

export default connect(null, {register})(Register);
