import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';
import { setLogout } from '../redux/actions/AuthActions';
import { connect } from 'react-redux';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import { setNewPicutre } from '../redux/actions/AuthActions';

import { AllStyles } from '../styles/Styles';

const styles = StyleSheet.create({
  viewPicture: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '40%',
  },
  viewEdit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picture: {
    width: 150,
    height: 150,
    borderRadius: 450,
    alignSelf: 'center',
  },
  icon: {
    fontSize: 36,
    padding: 5,
  },
  viewProfile: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  viewIcon: {
    width: '20%'
  },
  viewText: {
    width: '60%',
    alignItems: 'flex-start',
  },
  viewPencil: {
    width: '20%'
  }
});

function EditProfile(props) {
  const [picture, setPicture] = useState('');
  const [modalVisible, setModalVisible] = useState(false)
  
  const onSubmit = () => {
    props.setLogout();
  };
  
  const handleChoosePhoto = () => {
    const options = {
      quality: 0.7,
      mediaType: 'photo',
      noData: true,
      storageOptions: {
        path: 'images',
        waitUntilSaved: true,
        cameraRoll: true,
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.error) {
        console.log(response.error);
      } else if (!response.didCancel) {
        console.log('picture', picture);
        setPicture({
          upload: true,
          picture: response,
        });
      }
    });
  };
  
  const id = props.authData.data.uid;
  const onEditPhoto = () => {
    database()
    .ref(`/User/${id}`)
    .set({
      photo: picture.uri,
    })
    .then(() => console.log('Data set.'));
  };
  
  const edit = () => {
    const data = {
      name: props.authData.data.name,
      email: props.authData.data.email,
      phone: props.authData.data.phone,
      uid: props.authData.data.uid
    }
    props.navigation.navigate('UpdateProfile', {name: data.name, email: data.email, phone: data.phone, uid: data.uid})
    console.log('dataxxx', data.uid)
  }
  console.log('aaaaax')
  return (
    <View style={{ justifyContent: 'space-around' }}>
      <Modal 
        animationType="slide"
        transparent={false}
        visible={false}
        onRequestClose={() => {Alert.alert('Modal will closed')}}
      
      />
      <View style={styles.viewPicture}>
        <TouchableOpacity onPress={handleChoosePhoto}>
          {picture ? (
            <Avatar
              size="xlarge"
              rounded
              source={{
                uri: picture.uri,
              }}
              showEditButton
            />
          ) : (
              <Avatar
                size="xlarge"
                rounded
                containerStyle={{ alignSelf: 'center' }}
                source={{
                  uri: props.authData.data.photo,
                }}
                showEditButton
                onPress={() =>
                  props.navigation.navigate('UploadImage', props.authData.data)
                }
              />
            )}
        </TouchableOpacity>
      </View>
      <View style={{ padding: 10 }}>
        <View style={styles.viewProfile}>
          <View style={styles.viewIcon}>
            <Icon style={styles.icon} name="account" />
          </View>
          <View style={styles.viewText}>
            <Text style={{ padding: 8, fontSize: 18 }}> {props.authData.data.name}</Text>
          </View>
          <TouchableOpacity style={styles.viewPencil} onPress={edit}>
            <Icon style={styles.icon} name="pencil" />
          </TouchableOpacity>
        </View>
        <View style={styles.viewProfile}>
          <View style={styles.viewIcon}>
            <Icon style={styles.icon} name="email" />
          </View>
          <View style={styles.viewText}>
            <Text style={{ padding: 8, fontSize: 18 }}> {props.authData.data.email} </Text>
          </View>
          <TouchableOpacity style={styles.viewPencil} onPress={edit}>
            <Icon style={styles.icon} name="pencil" />
          </TouchableOpacity>
        </View>
        <View style={styles.viewProfile}>
          <View style={styles.viewIcon}>
            <Icon style={styles.icon} name="phone" />
          </View>
          <View style={styles.viewText}>
            <Text style={{ padding: 8, fontSize: 18 }}> {props.authData.data.phone} </Text>
          </View>
          <TouchableOpacity style={styles.viewPencil} onPress={edit}>
            <Icon style={styles.icon} name="pencil" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={AllStyles.viewButton}>
        <View style={AllStyles.specButton}>
          <Button
            title="Logout"
            color={'#00BFA6'}
            style={AllStyles.forButton}
            onPress={onSubmit}
          />
        </View>
      </View>
    </View>
  );
}

const MapStateToProps = (state) => {
  console.log('data profile', state.auth);
  return {
    authData: state.auth,
  };
};

export default connect(MapStateToProps, { setLogout })(EditProfile);
