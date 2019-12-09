import { all, takeLatest } from 'redux-saga/effects';

import saga from '@sagas/commonSagas';

import ACTIONS from '../actions';
import { fetchUserDetails, fetchFavourite, fetchBooksReviewed } from './api';

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
      ACTIONS.FETCH_FAVOURITE,
      saga,
      ACTIONS.FETCH_FAVOURITE_SUCCESS,
      ACTIONS.FETCH_FAVOURITE_FAILURE,
      fetchFavourite,
    ),
    takeLatest(
      ACTIONS.FETCH_BOOKS_REVIEWED,
      saga,
      ACTIONS.FETCH_BOOKS_REVIEWED_SUCCESS,
      ACTIONS.FETCH_BOOKS_REVIEWED_FAILURE,
      fetchBooksReviewed,
    ),
  ]);
}
