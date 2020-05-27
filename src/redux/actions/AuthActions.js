import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {ToastAndroid} from 'react-native';

// export const getOneData = (id) => async (dispatch) => {
//   try {
//     database()
//       .ref(`/User/${id}`)
//       .once('value')
//       .then((snapshot) => {
//         console.log('data user: ', snapshot.val());
//         const data = snapshot.val();
//         dispatch({
//           type: 'GET_USER_DATA',
//           payload: data,
//         });
//       });
//   } catch (errror) {
//     console.log(errror);
//   }
// };
export const setNewPicture = (url) => async (dispatch) => {
  try {
    dispatch({
      type: 'UPDATE_IMAGE',
      payload: url,
    });
  } catch (error) {}
};

export const getAllData = () => async (dispatch) => {
  try {
    database()
      .ref('/User')
      .once('value')
      .then((snapshot) => {
        console.log('all user data', snapshot.val());
        dispatch({
          type: 'GET_ALL_DATA',
          payload: snapshot.val(),
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export const setLogin = (email, password, callback) => async (dispatch) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log(email, password);
      auth().onAuthStateChanged((userData) => {
        console.log('userData', userData);
        const id = userData._user.uid;
        console.log(id);
        database()
          .ref(`User/${id}`)
          .once('value')
          .then((snapshot) => {
            console.log('User data: ', snapshot.val());
            dispatch({
              type: 'SET_LOGIN',
              payload: snapshot.val(),
            });
          });
        callback(true);
      });
    })
    .catch((err) => {
      console.log(err.code);
      if (err.code === 'auth/wrong-password') {
        ToastAndroid.show('Wrong Password', ToastAndroid.SHORT);
      }
      if (err.code === 'auth/invalid-email') {
        ToastAndroid.show('Wrong Email', ToastAndroid.SHORT);
      }
    });
};

export const register = (email, password, name, phone, callback) => async (
  dispatch,
) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log(email, password);
      auth().onAuthStateChanged((userData) => {
        console.log('register data', userData.uid);
        database()
          .ref('User/' + userData.uid)
          .set({
            name: name,
            status: 'online',
            phone: phone,
            email: email,
            photo:
              'https://st2.depositphotos.com/2668729/5359/v/950/depositphotos_53594427-stock-illustration-bird-avatar.jpg',
            uid: userData.uid,
          })
          .catch((error) => console.log(error.message));
      });
      callback(true);
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.log(error);
    });
};

export const setLogout = () => async (dispatch) => {
  console.log('Wadaw');
  auth()
    .signOut()
    .then(() => {
      dispatch({
        type: 'SET_LOGOUT',
      });
      console.log('User Signed Out');
    });
};

// export const insertNewUser = (data) => async (dispatch) => {
//   try {
//     const results = await database().ref('Users/').push(data);
//     dispatch({
//       type: 'GET_USER_DATA',
//       payload: results,
//     });
//   } catch (errror) {
//     console.log(errror);
//   }
// };
