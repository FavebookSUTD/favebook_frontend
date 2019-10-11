import { all, takeLatest } from 'redux-saga/effects';

import saga from '@sagas/commonSagas';

import ACTIONS from '../actions';
import { fetchBookResults, fetchPageNum } from './api';

export default function* watcherHome() {
  yield all([
    takeLatest(
      ACTIONS.FETCH_BOOK_RESULTS,
      saga,
      ACTIONS.FETCH_BOOK_RESULTS_SUCCESS,
      ACTIONS.FETCH_BOOK_RESULTS_FAILURE,
      fetchBookResults,
    ),
    takeLatest(
      ACTIONS.FETCH_PAGENUM,
      saga,
      ACTIONS.FETCH_PAGENUM_SUCCESS,
      ACTIONS.FETCH_PAGENUM_FAILURE,
      fetchPageNum,
    ),
  ]);
}
