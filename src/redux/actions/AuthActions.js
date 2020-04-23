import database from '@react-native-firebase/database';

export const getOneData = () => async (dispatch) => {
  try {
    const data = await database()
      .ref('UsersList/-M5VglMpoECkkBq9J8v6')
      .once('value')
      .then((snapshot) => {
        console.log('User data: ', snapshot.val());
      });
    dispatch({
      type: 'GET_USER_DATA',
      payload: data,
    });
  } catch (errror) {
    console.log(errror);
  }
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
