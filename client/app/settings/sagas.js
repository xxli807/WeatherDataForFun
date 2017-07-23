import { all } from 'redux-saga/effects';
import * as ccSagas from '../api/sagas';

export default function* saga() {
  yield all(ccSagas);
}
