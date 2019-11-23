import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  loading: {
    wantToRead: false,
    reading: false,
    myReviews: false,
  },
  error: {
    wantToRead: '',
    reading: '',
    myReviews: '',
  },
  wantToRead: [],
  reading: [],
  myReviews: {},
  totalReviewCount: 0,
  currentReviewPageNum: 0,
  pageSize: 8,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.FETCH_WANT_TO_READ:
      return state.setIn(['loading', 'wantToRead'], true);

    case ACTIONS.FETCH_WANT_TO_READ_SUCCESS:
      return state
        .set('wantToRead', fromJS(action.payload.data))
        .setIn(['loading', 'wantToRead'], false)
        .setIn(['error', 'wantToRead'], '');

    case ACTIONS.FETCH_WANT_TO_READ_FAILURE:
      return state.setIn(['loading', 'wantToRead'], false).set('error', action.payload.toString());

    case ACTIONS.FETCH_READING:
      return state.setIn(['loading', 'reading'], true);

    case ACTIONS.FETCH_READING_SUCCESS:
      return state
        .set('reading', fromJS(action.payload.data))
        .setIn(['loading', 'reading'], false)
        .setIn(['error', 'reading'], '');

    case ACTIONS.FETCH_READING_FAILURE:
      return state
        .setIn(['loading', 'reading'], false)
        .setIn(['error', 'reading'], action.payload.toString());

    case ACTIONS.FETCH_MY_REVIEWS:
      return state
        .setIn(['loading', 'myReviews'], true)
        .set('currentReviewPageNum', action.payload.pageNum);

    case ACTIONS.FETCH_MY_REVIEWS_SUCCESS:
      return state
        .setIn(['myReviews', action.payload.pageNum], fromJS(action.payload.data.reviews))
        .set('totalReviewCount', action.payload.data.num_reviews || 0)
        .setIn(['loading', 'myReviews'], false)
        .setIn(['error', 'myReviews'], '');

    case ACTIONS.FETCH_MY_REVIEWS_FAILURE:
      return state.setIn(['loading', 'myReviews'], false);

    default:
      return state;
  }
}
