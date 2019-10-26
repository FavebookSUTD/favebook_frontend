import { all, takeLatest } from 'redux-saga/effects';

import saga from '@sagas/commonSagas';
import notificationsHandler from '@sagas/notificationsHandler';

import ACTIONS from '../actions';
import { fetchUserRating, updateUserRating, submitUserReview } from './api';

export default function* watcherUserReview() {
  yield all([
    takeLatest(
      ACTIONS.FETCH_USER_RATING,
      saga,
      ACTIONS.FETCH_USER_RATING_SUCCESS,
      ACTIONS.FETCH_USER_RATING_FAILURE,
      fetchUserRating,
    ),
    takeLatest(
      ACTIONS.UPDATE_USER_RATING,
      saga,
      ACTIONS.UPDATE_USER_RATING_SUCCESS,
      ACTIONS.UPDATE_USER_RATING_FAILURE,
      updateUserRating,
    ),
    takeLatest(
      ACTIONS.SUBMIT_USER_REVIEW,
      saga,
      ACTIONS.SUBMIT_USER_REVIEW_SUCCESS,
      ACTIONS.SUBMIT_USER_REVIEW_FAILURE,
      submitUserReview,
    ),
    takeLatest(
      ACTIONS.SUBMIT_USER_REVIEW_SUCCESS,
      notificationsHandler,
      'success',
      'Successfully submitted the review.',
    ),
    takeLatest(
      ACTIONS.SUBMIT_USER_REVIEW_FAILURE,
      notificationsHandler,
      'error',
      'Failed to submit the review.',
    ),
  ]);
}
