import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {AllStyles} from '../styles/Styles';
import {editProfile, getOneData} from '../redux/actions/AuthActions'
import {connect} from 'react-redux'

function UpdateProfile(props) {
    console.log('lempar props', props.route.params.phone)
    const [email, setEmail] = useState(props.route.params.email)
    const [phone, setPhone] = useState(props.route.params.phone)
    const [name, setName] = useState(props.route.params.name)
const onSubmit = () => {
    const uid = props.route.params.uid
    props.editProfile(uid, name, email, phone)
    props.getOneData(uid)
    props.navigation.navigate('UpdateProfile')
    console.log(uid, name, email, phone)
}
  return (
    <View style={styles.viewTwo}>
      <View>
        <View style={styles.inputEdit}>
          <Text style={styles.text}>Name</Text>
          <TextInput 
            style={styles.input}  
            defaultValue={props.route.params.name}
            onChangeText={(name)=> setName(name)} 
             />
        </View>
        <View style={styles.inputEdit}>
          <Text style={styles.text}>Email</Text>
          <TextInput 
            style={styles.input}
            defaultValue={props.route.params.email}
            onChangeText={(email)=> setEmail(email)} />
        </View>
        <View style={styles.inputEdit}>
          <Text style={styles.text}>Phone</Text>
          <TextInput 
            style={styles.input}
            defaultValue={props.route.params.phone}
            onChangeText={(phone)=> setPhone(phone)} />
        </View>
      </View>
      <View style={AllStyles.viewButton}>
        <View style={AllStyles.specButton}>
          <Button
            title="Edit"
            color={'#00BFA6'}
            style={AllStyles.forButton}
            onPress={onSubmit}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    viewTwo: {
        flex: 1,
        justifyContent: 'space-around'
    },
    inputEdit: {
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "row"
    },
    text: {
        width: '40%',
        textAlign: 'center',    
        fontSize: 20
    },
    input: {
        width: '60%',
        fontSize: 20
    }
});

export default connect(null, {editProfile, getOneData})(UpdateProfile)