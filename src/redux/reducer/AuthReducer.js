const initialState = {
  data: {},
};

const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_USER_DATA':
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};
export default authReducer;
