import { all, takeLatest } from 'redux-saga/effects';

import saga from '@sagas/commonSagas';

import ACTIONS from '../actions';
import { fetchNextPage } from './api';

export default function* watcherBrowseResultsPage() {
  yield all([
    takeLatest(
      ACTIONS.FETCH_NEXT_PAGE,
      saga,
      ACTIONS.FETCH_NEXT_PAGE_SUCCESS,
      ACTIONS.FETCH_NEXT_PAGE_FAILURE,
      fetchNextPage,
    ),
  ]);
}
