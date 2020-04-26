import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

Geolocation.setRNConfiguration({skipPermissionRequests: true});

const Styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class Contact extends React.Component {
  state = {
    coords: {},
  };
  componentDidMount() {
    Geolocation.getCurrentPosition(
      (data) => {
        this.setState(data.coords);
      },
      (err) => {
        console.log(err);
      },
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        {this.state.coords && (
          <MapView
            provider={PROVIDER_GOOGLE}
            followsUserLocation={true}
            showsMyLocationButton={true}
            minZoomLevel={16}
            loadingEnabled={true}
            showsUserLocation
            style={Styles.map}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        )}
      </View>
    );
  }
}
