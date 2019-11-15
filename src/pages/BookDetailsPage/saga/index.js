import { all, takeLatest, takeEvery } from 'redux-saga/effects';

import saga from '@sagas/commonSagas';
import { updateBookReviewSaga } from './sagas';

import ACTIONS from '../actions';
import UserReviewActions from '../containers/UserReview/actions';
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
    takeEvery(
      UserReviewActions.SUBMIT_USER_REVIEW_SUCCESS,
      updateBookReviewSaga,
      ACTIONS.ADD_NEW_BOOK_REVIEW,
    ),
    takeEvery(
      UserReviewActions.UPDATE_USER_REVIEW_SUCCESS,
      updateBookReviewSaga,
      ACTIONS.UPDATE_BOOK_REVIEW,
    ),
  ]);
}
