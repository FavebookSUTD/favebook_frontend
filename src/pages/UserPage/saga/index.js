import { all, takeLatest } from 'redux-saga/effects';

import saga from '@sagas/commonSagas';

import ACTIONS from '../actions';
import { fetchBooksInCommon } from './api';

export default function* watcherUserPage() {
  yield all([
    takeLatest(
      ACTIONS.FETCH_BOOKS_IN_COMMON,
      saga,
      ACTIONS.FETCH_BOOKS_IN_COMMON_SUCCESS,
      ACTIONS.FETCH_BOOKS_IN_COMMON_FAILURE,
      fetchBooksInCommon,
    ),
  ]);
}
