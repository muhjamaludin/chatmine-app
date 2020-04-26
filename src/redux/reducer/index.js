import {combineReducers} from 'redux';

import Auth from './AuthReducer';

const appReducer = combineReducers({
  auth: Auth,
});

const rootReducer = (state, action) => {
  if (action.type === 'SET_LOGOUT') {
    state = null;
  }
  return appReducer;
};

export default appReducer;
