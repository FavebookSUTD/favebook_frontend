import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  loading: {
    wantToRead: false,
    reading: false,
    myReviews: false,
  },
  wantToRead: [],
  reading: [],
  myReviews: [],
  error: '',
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.FETCH_WANT_TO_READ:
      return state.setIn(['loading', 'wantToRead'], true);

    case ACTIONS.FETCH_WANT_TO_READ_SUCCESS:
      return state
        .set('wantToRead', fromJS(action.payload.data))
        .setIn(['loading', 'wantToRead'], false)
        .set('error', '');

    case ACTIONS.FETCH_WANT_TO_READ_FAILURE:
      return state
        .set('wantToRead', fromJS([]))
        .setIn(['loading', 'wantToRead'], false)
        .set('error', action.payload.toString());

    case ACTIONS.FETCH_READING:
      return state.setIn(['loading', 'reading'], true);

    case ACTIONS.FETCH_READING_SUCCESS:
      return state
        .set('reading', fromJS(action.payload.data))
        .setIn(['loading', 'reading'], false)
        .set('error', '');

    case ACTIONS.FETCH_READING_FAILURE:
      return state
        .set('reading', fromJS([]))
        .setIn(['loading', 'reading'], false)
        .set('error', action.payload.toString());

    case ACTIONS.FETCH_MY_REVIEWS:
      return state.setIn(['loading', 'myReviews'], true);

    case ACTIONS.FETCH_MY_REVIEWS_SUCCESS:
      return state
        .set('myReviews', fromJS(action.payload.data))
        .setIn(['loading', 'myReviews'], false)
        .set('error', '');

    case ACTIONS.FETCH_MY_REVIEWS_FAILURE:
      return state
        .set('myReviews', fromJS([]))
        .setIn(['loading', 'myReviews'], false)
        .set('error', action.payload.toString());

    default:
      return state;
  }
}
