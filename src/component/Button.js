import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewButton: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  specButton: {
    width: '60%',
    borderRadius: 20,
  },
  forButton: {
    borderRadius: 20,
  },
});

export default function ButtonC(props) {
  return (
    <View style={styles.viewButton}>
      <View style={styles.specButton}>
        <Button title={props.name} color="#96cf68" style={styles.forButton} />
      </View>
    </View>
  );
}
