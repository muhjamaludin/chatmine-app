const initialState = {
  data: {},
  isLogin: false,
};

const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_USER_DATA':
      return {
        ...state,
        data: payload,
      };
    case 'GET_ALL_DATA':
      return {
        ...state,
        data: payload,
      };
    case 'SET_LOGIN':
      return {
        ...state,
        data: payload,
        isLogin: true,
      };
    case 'SET_LOGOUT':
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
};
export default authReducer;
