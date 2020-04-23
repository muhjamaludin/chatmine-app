import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import storage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from './reducer/index';

const config = {
  key: 'chatmine',
  storage,
};

const persistedReducer = persistReducer(config, reducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(logger, thunk),
);
export const persistor = persistStore(store);
