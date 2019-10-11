import { all, takeLatest } from 'redux-saga/effects';

import saga from '@sagas/commonSagas';

import ACTIONS from '../actions';
import { fetchBookResults, setPageNum } from './api';

export default function* watcherBrowseResults() {
  yield all([
    takeLatest(
      ACTIONS.FETCH_BOOK_RESULTS,
      saga,
      ACTIONS.FETCH_BOOK_RESULTS_SUCCESS,
      ACTIONS.FETCH_BOOK_RESULTS_FAILURE,
      fetchBookResults,
    ),
    takeLatest(
      ACTIONS.SET_PAGENUM,
      saga,
      ACTIONS.SET_PAGENUM_SUCCESS,
      ACTIONS.SET_PAGENUM_FAILURE,
      setPageNum,
    ),
  ]);
}
