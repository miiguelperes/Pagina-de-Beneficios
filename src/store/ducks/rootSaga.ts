import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesTypes } from './repositories/types';
import { load, login, _saveSelected } from './repositories/sagas';
import { saveSelected, searchData } from './repositories/actions';

export default function* rootSaga() {
  return yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
    takeLatest(RepositoriesTypes.LOGIN, login),
    takeLatest(RepositoriesTypes.SAVE_SELECTED, saveSelected),
    takeLatest(RepositoriesTypes.SEARCH_DATA, searchData)
  ]);
}
