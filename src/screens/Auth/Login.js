import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  TouchableHighlight,
} from 'react-native';

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
});

export default function EditProfile({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, onChangeText] = useState('nomor telepon');
  return (
    <>
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>Masukkan nomor telepon Anda</Text>
      </View>
      <View style={styles.viewHeader}>
        <Text style={styles.textVerif}>
          ChatMine akan mengirim SMS untuk memverifikasi nomor telepon Anda.{' '}
          <Text style={styles.textMyNumber}>Berapa nomor saya ?</Text>
        </Text>
      </View>
      <View style={styles.viewHeader}>
        <Text>Negara</Text>
      </View>
      <View style={styles.viewNumber}>
        <Text>+62</Text>
        <TextInput
          onChangeText={(text) => onChangeText('+62 '.concat(text))}
          placeholder="nomor"
        />
      </View>
      <View style={styles.viewHeader}>
        <View>
          <Text style={styles.textOpacity}>
            Biaya SMS operator mungkin berlaku
          </Text>
        </View>
      </View>
      <View style={styles.viewHeader}>
        <TouchableHighlight>
          <Button onPress={() => navigation.navigate('OTP')} title={'LANJUT'} />
        </TouchableHighlight>
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <View style={styles.modal}>
            <View>
              <Text>Kami akan memverifikasi nomor telepon:</Text>
            </View>
            <View>
              <Text>{value}</Text>
            </View>
            <View>
              <Text>
                Apakah data ini benar atau Anda ingin mengubah nomor Anda ?
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text onPress={() => navigation.goBack()}>EDIT</Text>
              <Text onPress={() => navigation.navigate('OTP')}>OKE</Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
