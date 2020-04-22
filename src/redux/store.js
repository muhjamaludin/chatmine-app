import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from './reducer/index';

const config = {
  key: 'chatmine',
  storage,
};

const persistedReducer = persistReducer(config, reducer);

export default function () {
  const store = createStore(
    persistedReducer,
    applyMiddleware(promiseMiddleware, logger, thunk),
  );
  const persistor = persistStore(store);
  return {store, persistor};
}
