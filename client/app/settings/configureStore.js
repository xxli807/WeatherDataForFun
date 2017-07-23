import rootReducer from './rootReducer';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import saga from './sagas';

import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(browserHistory),
        sagaMiddleware
      )
    )
  );

  sagaMiddleware.run(saga);

  return store;
};
