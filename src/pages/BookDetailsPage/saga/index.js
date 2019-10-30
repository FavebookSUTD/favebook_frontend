import { all, takeLatest } from 'redux-saga/effects';

import saga from '@sagas/commonSagas';

import ACTIONS from '../actions';
import { fetchBookDetails, fetchBookReviews } from './api';

export default function* watchBookDetailsPage() {
  yield all([
    takeLatest(
      ACTIONS.FETCH_BOOK_DETAILS,
      saga,
      ACTIONS.FETCH_BOOK_DETAILS_SUCCESS,
      ACTIONS.FETCH_BOOK_DETAILS_FAILURE,
      fetchBookDetails,
    ),
    takeLatest(
      ACTIONS.FETCH_INIT_BOOK_REVIEWS,
      saga,
      ACTIONS.FETCH_INIT_BOOK_REVIEWS_SUCCESS,
      ACTIONS.FETCH_INIT_BOOK_REVIEWS_FAILURE,
      fetchBookReviews,
    ),
    takeLatest(
      ACTIONS.FETCH_NEXT_BOOK_REVIEWS,
      saga,
      ACTIONS.FETCH_NEXT_BOOK_REVIEWS_SUCCESS,
      ACTIONS.FETCH_NEXT_BOOK_REVIEWS_FAILURE,
      fetchBookReviews,
    ),
  ]);
}
