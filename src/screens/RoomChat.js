import React from 'react';
import {View, StyleSheet, Keyboard, Button, TextInput} from 'react-native';
import {avatar, Avatar} from 'react-native-elements';
import SortData from 'sort-objects-array'
import {GiftedChat} from 'react-native-gifted-chat';
import database from '@react-native-firebase/database';
import {connect} from 'react-redux';

class RoomChat extends React.Component {
  state = {
    currentUser: this.props.userData.uid,
    userSelected: this.props.route.params.users.uid,
    messages: [],
    messageList: [],
    showModal: false,
  };

  componentDidMount() {
    database()
      .ref('/message')
      .child(`/${this.state.currentUser}/`)
      .child(`/${this.state.userSelected}/`)
      .on('child_added', (value) => {
        this.setState((prevState) => {
          const data = value.val();
          const res = [...prevState.messages, value.val()];
          const d = res.map((data, index) => {
            data.text = data.message;
            data._id = index;
            data.createdAt = data.time;
            data.user = {
              _id: data.from === this.state.currentUser ? 1 : 2,
              avatar:
                data.from !== this.state.currentUser
                  ? this.props.route.params.users.photo
                  : null,
            };
            return data;
          });
          console.log(d, 'CEEr');
          return {
            messages: SortData(d, 'createdAt', 'desc'),
          };
        });
      });
  }

  onSend(messages = []) {
    this.setState(
      (previousState) => ({}),
      async () => {
        if (messages) {
          try {
            let messageId = (
              await database()
                .ref('/message/')
                .child(`/${this.state.currentUser}/`)
                .child(`/${this.state.userSelected}`)
                .push()
            ).key;
            let updates = {};
            let message = {
              message: messages[0].text,
              time: database.ServerValue.TIMESTAMP,
              from: this.state.currentUser,
            };
            updates[
              `message/${this.state.currentUser}/${this.state.userSelected}/${messageId}`
            ] = message;
            updates[
              `message/${this.state.userSelected}/${this.state.currentUser}/${messageId}`
            ] = message;
            database()
              .ref()
              .update(updates, () => {
                this.setState({textMessage: ''});
              });
          } catch (error) {
            console.log('This error from chat', error);
          }
        }
      },
    );
  }
  render() {
    return (
      <GiftedChat
        showUserAvatar={false}
        showAvatarForEveryMessage={false}
        renderAvatar={false}
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
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

const mapStateToProps = (state) => {
  return {
    userData: state.auth.data,
  };
};

export default connect(mapStateToProps, {})(RoomChat);
