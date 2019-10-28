import { all, takeLatest } from 'redux-saga/effects';

import saga from '@sagas/commonSagas';

import ACTIONS from '../actions';
import { fetchUserDetails, fetchWantToRead, fetchReading, fetchBooksInCommon } from './api';

export default function* watcherUserPage() {
  yield all([
    takeLatest(
      ACTIONS.FETCH_USER_DETAILS,
      saga,
      ACTIONS.FETCH_USER_DETAILS_SUCCESS,
      ACTIONS.FETCH_USER_DETAILS_FAILURE,
      fetchUserDetails,
    ),
    takeLatest(
      ACTIONS.FETCH_WANT_TO_READ_BOOKS,
      saga,
      ACTIONS.FETCH_WANT_TO_READ_BOOKS_SUCCESS,
      ACTIONS.FETCH_WANT_TO_READ_BOOKS_FAILURE,
      fetchWantToRead,
    ),
    takeLatest(
      ACTIONS.FETCH_READING_BOOKS,
      saga,
      ACTIONS.FETCH_READING_BOOKS_SUCCESS,
      ACTIONS.FETCH_READING_BOOKS_FAILURE,
      fetchReading,
    ),
    takeLatest(
      ACTIONS.FETCH_BOOKS_IN_COMMON,
      saga,
      ACTIONS.FETCH_BOOKS_IN_COMMON_SUCCESS,
      ACTIONS.FETCH_BOOKS_IN_COMMON_FAILURE,
      fetchBooksInCommon,
    ),
  ]);
}
