import { all, takeLatest } from 'redux-saga/effects';

import saga from '@sagas/commonSagas';

import ACTIONS from '../actions';
import { searchBooks } from './api';

export default function* watcherHome() {
  yield all([
    takeLatest(
      ACTIONS.SEARCH_BOOKS,
      saga,
      ACTIONS.SEARCH_BOOKS_SUCCESS,
      ACTIONS.SEARCH_BOOKS_FAILURE,
      searchBooks,
    ),
  ]);
}
