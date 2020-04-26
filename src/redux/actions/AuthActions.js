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

export const getAllData = () => async (dispatch) => {
  try {
    const data = await database()
      .ref('User/')
      .once('value')
      .then((snapshot) => {
        console.log('all user data', snapshot.val());
      });
    dispatch({
      type: 'GET_ALL_DATA',
      payload: data,
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
        database()
          .ref(`/User/${id}`)
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
        database()
          .ref('User/' + userData.uid)
          .set({
            name: name,
            status: 'online',
            phone: phone,
            email: email,
            photo:
              'https://cdn2.iconfinder.com/data/icons/men-women-from-all-over-the-world-1/93/man-woman-people-person-avatar-face-user_49-512.png',
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

export const insertNewUser = (data) => async (dispatch) => {
  try {
    const results = await database().ref('Users/').push(data);
    dispatch({
      type: 'GET_USER_DATA',
      payload: results,
    });
  } catch (errror) {
    console.log(errror);
  }
};
