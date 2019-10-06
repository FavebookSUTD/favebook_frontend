import { all, takeLatest } from 'redux-saga/effects';

import saga from '@sagas/commonSagas';

import ACTIONS from '../actions';
import { loginFromAPI, loginFromStorage } from './api';

export default function* watcherAuthForm() {
  yield all([]);
}
