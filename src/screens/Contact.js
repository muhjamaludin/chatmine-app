import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {connect} from 'react-redux';

import Geolocation from '@react-native-community/geolocation';
Geolocation.setRNConfiguration((info) => console.log(info));

const Styles = StyleSheet.create({
  container: {
    height: '100%',
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
          {/* <MapView.Marker
              title={this.props.route.params.name}
              description={`${this.props.route.params.name}'s current position`}
              coordinate={{
                latitude: this.props.route.params.location.latitude,
                longitude: this.props.route.params.location.longitude,
              }} */}
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
