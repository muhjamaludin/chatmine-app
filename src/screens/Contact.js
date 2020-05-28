import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {connect} from 'react-redux';

import Geolocation from '@react-native-community/geolocation';
Geolocation.setRNConfiguration((info) => console.log(info));

const Styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

class Contact extends React.Component {
  state = {
    coords: {},
  };

  // componentWillMount() {
  //   Geolocation.getCurrentPosition(
  //     (data) => {
  //       this.setState({coords: data.coords});
  //     },
  //     (err) => {
  //       console.log(err);
  //     },
  //   );
  // }

  render() {
    console.log('this', this.props.userMap.data.photo)
    return (
      <View style={Styles.container}>
        {/* {this.state.coords && ( */}
        <MapView
          provider={PROVIDER_GOOGLE}
          followsUserLocation={true}
          showsMyLocationButton={true}
          minZoomLevel={12}
          loadingEnabled={true}
          showsUserLocation
          style={Styles.map}
          initialRegion={{
            latitude: -6.595038,
            longitude: 106.816635,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
              title={'Jaya'}
              description={`Jaya's current position`}
              coordinate={{
                latitude: -6.595038,
                longitude: 106.816635,
              }} 
            >
              <Image 
              source={{uri: this.props.userMap.data.photo}} 
              style={{height: 46, width: 46, borderRadius: 40}} />
          </Marker>
        </MapView>
        {/* )} */}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('ayam', state.auth.data);
  return {
    userMap: state.auth,
  };
};

export default connect(mapStateToProps, null)(Contact);
