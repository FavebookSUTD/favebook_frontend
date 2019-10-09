import { all, takeLatest } from 'redux-saga/effects';

import saga from '@sagas/commonSagas';

import ACTIONS from '../actions';
import {
  loginFromAPI,
  loginFromStorage,
  fetchRecommendBookList,
  fetchBestsellBookList,
  fetchGenres,
} from './api';

export default function* watcherHome() {
  yield all([
    takeLatest(
      ACTIONS.LOGIN_FROM_API,
      saga,
      ACTIONS.LOGIN_SUCCESS,
      ACTIONS.LOGIN_FAILURE,
      loginFromAPI,
    ),
    takeLatest(
      ACTIONS.LOGIN_FROM_STORAGE,
      saga,
      ACTIONS.LOGIN_SUCCESS,
      ACTIONS.LOGIN_FAILURE,
      loginFromStorage,
    ),
    takeLatest(
      ACTIONS.FETCH_RECOMMEND_BOOKLIST,
      saga,
      ACTIONS.FETCH_RECOMMEND_BOOKLIST_SUCCESS,
      ACTIONS.FETCH_RECOMMEND_BOOKLIST_FAILURE,
      fetchRecommendBookList,
    ),
    takeLatest(
      ACTIONS.FETCH_BESTSELL_BOOKLIST,
      saga,
      ACTIONS.FETCH_BESTSELL_BOOKLIST_SUCCESS,
      ACTIONS.FETCH_BESTSELL_BOOKLIST_FAILURE,
      fetchBestsellBookList,
    ),
    takeLatest(
      ACTIONS.FETCH_GENRES,
      saga,
      ACTIONS.FETCH_GENRES_SUCCESS,
      ACTIONS.FETCH_GENRES_FAILURE,
      fetchGenres,
    ),
  ]);
}
