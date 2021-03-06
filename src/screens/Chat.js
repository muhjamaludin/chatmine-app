import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableHighlight,
  Button,
} from 'react-native';
import {getAllData} from '../redux/actions/AuthActions';
import {connect} from 'react-redux';
import database from '@react-native-firebase/database';

const kawan = [
  {
    id: 1,
    pic: require('../files/dian_sastro.jpg'),
    name: 'Dian Sastrowardoyo',
    msg: 'Jangan lupa',
  },
  {
    id: 2,
    pic: require('../files/mikha_tambayong.jpeg'),
    name: 'Mikha Tambayong',
    msg: 'Hay Baby',
  },
  {
    id: 9,
    pic: require('../files/jessica_veranda.jpg'),
    name: 'Jessica Veranda',
    msg: 'Semangat Yah 🤗️',
  },
  {
    id: 3,
    pic: require('../files/dian_sastro.jpg'),
    name: 'Dian Sastrowardoyo',
    msg: 'Sayang',
  },
  {
    id: 4,
    pic: require('../files/mikha_tambayong.jpeg'),
    name: 'Mikha Tambayong',
    msg: 'Hay Baby',
  },
  {
    id: 5,
    pic: require('../files/jessica_veranda.jpg'),
    name: 'Jessica Veranda',
    msg: 'Semangat Yah 🤗️',
  },
  {
    id: 6,
    pic: require('../files/dian_sastro.jpg'),
    name: 'Dian Sastrowardoyo',
    msg: 'Sayang',
  },
  {
    id: 7,
    pic: require('../files/mikha_tambayong.jpeg'),
    name: 'Mikha Tambayong',
    msg: 'Hay Baby',
  },
  {
    id: 8,
    pic: require('../files/jessica_veranda.jpg'),
    name: 'Jessica Veranda',
    msg: 'Semangat Yah 🤗️',
  },
  {
    id: 10,
    pic: require('../files/dian_sastro.jpg'),
    name: 'Dian Sastrowardoyo',
    msg: 'Sayang',
  },
  {
    id: 11,
    pic: require('../files/mikha_tambayong.jpeg'),
    name: 'Mikha Tambayong',
    msg: 'Hay Baby',
  },
  {
    id: 12,
    pic: require('../files/jessica_veranda.jpg'),
    name: 'Jessica Veranda',
    msg: 'Semangat Yah 🤗️',
  },
  {
    id: 13,
    pic: require('../files/mikha_tambayong.jpeg'),
    name: 'Mikha Tambayong',
    msg: 'Hay Baby',
  },
  {
    id: 14,
    pic: require('../files/jessica_veranda.jpg'),
    name: 'Jessica Veranda',
    msg: 'Semangat Yah 🤗️',
  },
  {
    id: 15,
    pic: require('../files/dian_sastro.jpg'),
    name: 'Dian Sastrowardoyo',
    msg: 'Sayang',
  },
  {
    id: 16,
    pic: require('../files/mikha_tambayong.jpeg'),
    name: 'Mikha Tambayong',
    msg: 'Hay Baby',
  },
  {
    id: 17,
    pic: require('../files/jessica_veranda.jpg'),
    name: 'Jessica Veranda',
    msg: 'Semangat Yah 🤗️',
  },
];

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
  },
  viewPic: {
    padding: 5,
  },
  pic: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  viewText: {
    paddingLeft: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: '#e8e8e8',
    width: '80%',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  opacityText: {
    opacity: 0.5,
  },
});

function Chat(props) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({});
  useEffect(() => {
    database()
      .ref('User/')
      .on('value', (snapshot) => {
        const currentUser = props.authData.uid;
        const data = snapshot.val();
        const user = Object.values(data);
        const result = user.filter((u) => u.uid !== currentUser);
        setUsers(result);
        setLoading(false);
        console.log('array', users);
      });
  }, [loading]);
  return (
    <ScrollView scrollEventThrottle={8}>
      {loading ? null :
        users.map((item, i) => (
          <TouchableHighlight
            onPress={() =>
              props.navigation.navigate('RoomChat', {users: item})
            }>
            <View key={users[i].uid} style={styles.card}>
              <View style={styles.viewPic}>
                <Image style={styles.pic} source={{uri: users[i].photo}} />
              </View>
              <View style={styles.viewText}>
                <Text style={styles.boldText}>{users[i].name}</Text>
                <Text style={styles.opacityText}>{users[i].status}</Text>
              </View>
            </View>
          </TouchableHighlight>
        ))}
    </ScrollView>
  );
}

const MapStateToProps = (state) => {
  return {authData: state.auth.data};
};

const MapDispatchToProps = {getAllData};

export default connect(MapStateToProps, MapDispatchToProps)(Chat);
