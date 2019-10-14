import { all, takeLatest } from 'redux-saga/effects';

import saga from '@sagas/commonSagas';

import ACTIONS from '../actions';
import { fetchNextPage } from './api';

export default function* watcherBrowseResultsPage() {
  yield all([
    takeLatest(
      ACTIONS.FETCH_BOOK_RESULTS,
      saga,
      ACTIONS.FETCH_BOOK_RESULTS_SUCCESS,
      ACTIONS.FETCH_BOOK_RESULTS_FAILURE,
      fetchNextPage,
    ),
  ]);
}
