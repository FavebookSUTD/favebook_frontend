import { put } from 'redux-saga/effects';

export function* updateBookReviewSaga(triggerAction, { payload }) {
  yield put({
    type: triggerAction,
    payload,
  });
}
