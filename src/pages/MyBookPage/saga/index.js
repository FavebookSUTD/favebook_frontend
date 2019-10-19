import { all, takeLatest } from 'redux-saga/effects';

import saga from '@sagas/commonSagas';

import ACTIONS from '../actions';

import { fetchWantToRead, fetchReading, fetchMyReviews } from './api';

export default function* watcherHome() {
  yield all([
    takeLatest(
      ACTIONS.FETCH_WANT_TO_READ,
      saga,
      ACTIONS.FETCH_WANT_TO_READ_SUCCESS,
      ACTIONS.FETCH_WANT_TO_READ_FAILURE,
      fetchWantToRead,
    ),
    takeLatest(
      ACTIONS.FETCH_READING,
      saga,
      ACTIONS.FETCH_MY_REVIEWS_SUCCESS,
      ACTIONS.FETCH_MY_REVIEWS_FAILURE,
      fetchReading,
    ),
    takeLatest(
      ACTIONS.FETCH_MY_REVIEWS,
      saga,
      ACTIONS.FETCH_MY_REVIEWS_SUCCESS,
      ACTIONS.FETCH_MY_REVIEWS_FAILURE,
      fetchMyReviews,
    ),
  ]);
}
