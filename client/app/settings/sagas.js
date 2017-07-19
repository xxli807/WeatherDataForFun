import * as ccSagas from '../api/sagas';

const sagas = [...ccSagas];

export default function* root() {
  yield sagas;
}
