import React from 'react';
import {View, StyleSheet, Keyboard, Button, TextInput} from 'react-native';

export default class RoomChat extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  state = {
    text: '',
  };
  submit() {
    this.props.submit(this.state.text);
    this.setState({
      text: '',
    });
    Keyboard.dismiss();
  }
  render() {
    return (
      <View style={styles.compose}>
        <TextInput
          style={styles.composeText}
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={(event) => this.submit()}
          editable={true}
          maxLength={40}
        />
        <Button onPress={this.submit} title="Send" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  composeText: {
    width: '80%',
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: 'white',
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  compose: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
});
