import React from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
  flexPassword: {
    flexDirection: 'row',
  },
});

export default function ForgotPassword(props) {
  return (
    <View>
      <View style={styles.flexPassword}>
        <Text>Old Password</Text>
        <TextInput placeholder="Old Password" />
      </View>
      <View style={styles.flexPassword}>
        <Text>New Password</Text>
        <TextInput placeholder="New Password" />
      </View>
      <View style={styles.flexPassword}>
        <Text>Re-enter Password</Text>
        <TextInput placeholder="Re-enter Password" />
      </View>
      <View>
        <Button
          onPress={() => props.navigation.navigate('LoginScreen')}
          title="Made New Password"
        />
      </View>
    </View>
  );
}
