import { all, takeLatest } from "redux-saga/effects";

import saga from "@sagas/commonSagas";

import ACTIONS from "../actions";
import { loginFromAPI, loginFromStorage } from "./api";

export default function* watcherHome() {
  yield all([
    takeLatest(
      ACTIONS.LOGIN_FROM_API,
      saga,
      ACTIONS.LOGIN_SUCCESS,
      ACTIONS.LOGIN_FAILURE,
      loginFromAPI
    ),
    takeLatest(
      ACTIONS.LOGIN_FROM_STORAGE,
      saga,
      ACTIONS.LOGIN_SUCCESS,
      ACTIONS.LOGIN_FAILURE,
      loginFromStorage
    )
  ]);
}
