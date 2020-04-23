import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Otp({navigation}) {
  return (
    <>
      <View>
        <Text>Verifkasi</Text>
        <Button
          title="Lanjutkan"
          onPress={() => navigation.navigate('MyTab')}
        />
      </View>
    </>
  );
}
