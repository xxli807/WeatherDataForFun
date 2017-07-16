import rootReducer from './rootReducer';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        routerMiddleware(browserHistory),
        sagaMiddleware
      )
    )
  );

  store.runSaga = sagaMiddleware.run;

  return store;
};
