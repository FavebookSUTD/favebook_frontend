import { all, takeLatest } from 'redux-saga/effects';

import saga from '@sagas/commonSagas';

import ACTIONS from '../actions';
import {} from './api';

export default function* watcherHome() {
  yield all([]);
}
