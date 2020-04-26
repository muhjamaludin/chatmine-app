import React from 'react';
import {Text, View, Image, StyleSheet, TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {setLogout} from '../redux/actions/AuthActions';
import {connect} from 'react-redux';

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
    borderRadius: 150,
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
  const onSubmit = () => {
    props.setLogout();
  };
  return (
    <View>
      <View style={styles.viewPicture}>
        <Image
          source={{uri: props.authData.data.photo}}
          style={styles.picture}
        />
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
  console.log('data profile', state.auth.data.photo);
  return {
    authData: state.auth,
  };
};

export default connect(MapStateToProps, {setLogout})(EditProfile);
