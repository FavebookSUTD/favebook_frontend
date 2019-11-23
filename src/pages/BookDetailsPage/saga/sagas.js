import { put, select } from 'redux-saga/effects';

export function* updateBookReviewSaga(triggerAction) {
  const payload = yield select(state => {
    const currentState = state.get('BookDetailsPage');
    return {
      bookId: currentState.getIn(['book', 'asin']),
      pageNum: currentState.get('currentReviewPageNum'),
      pageSize: currentState.get('pageSize'),
    };
  });

  yield put({
    type: triggerAction,
    payload,
  });
}
