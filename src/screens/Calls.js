import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';
import {setLogout} from '../redux/actions/AuthActions';
import {connect} from 'react-redux';
import database from '@react-native-firebase/database';

import {AllStyles} from '../styles/Styles';

const styles = StyleSheet.create({
  viewPicture: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%',
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
    fontSize: 26,
    padding: 5,
  },
  viewProfile: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

function EditProfile(props) {
  const [picture, setPicture] = useState('');

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

  return (
    <View>
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
              containerStyle={{alignSelf: 'center'}}
              source={{
                uri: props.authData.data.photo,
              }}
              showEditButton
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.viewProfile}>
        <View style={{width: '50%', flexDirection: 'row'}}>
          <View>
            <Icon style={styles.icon} name="account" />
          </View>
          <View style={styles.viewEdit}>
            <View>
              <Text style={{padding: 8}}>{props.authData.data.name}</Text>
            </View>
            {/* <View>
            <Icon style={styles.icon} name="pencil" />
          </View> */}
          </View>
        </View>
      </View>
      <View style={styles.viewProfile}>
        <View style={{width: '50%', flexDirection: 'row'}}>
          <View>
            <Icon style={styles.icon} name="email" />
          </View>
          <View style={styles.viewEdit}>
            <View>
              <Text style={{padding: 5}}> {props.authData.data.email} </Text>
            </View>
            {/* <View>
            <Icon style={styles.icon} name="pencil" />
          </View> */}
          </View>
        </View>
      </View>
      <View style={styles.viewProfile}>
        <View style={{width: '50%', flexDirection: 'row'}}>
          <View>
            <Icon style={styles.icon} name="phone" />
          </View>
          <View>
            <Text style={{padding: 5}}> {props.authData.data.phone} </Text>
          </View>
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
  console.log('data profile', state.auth.data);
  return {
    authData: state.auth,
  };
};

export default connect(MapStateToProps, {setLogout})(EditProfile);
