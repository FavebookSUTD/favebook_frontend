import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  userDetails: {},
  wantToRead: [],
  reading: [],
  booksInCommon: [],
  loading: {
    userDetails: false,
    wantToRead: false,
    reading: false,
    booksInCommon: false,
  },
  error: {
    userDetails: '',
    wantToRead: '',
    reading: '',
    booksInCommon: '',
  },
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.FETCH_USER_DETAILS:
      return state.setIn(['loading', 'userDetails'], true);

    case ACTIONS.FETCH_USER_DETAILS_SUCCESS:
      return state
        .set('userDetails', fromJS(action.payload.data))
        .setIn(['loading', 'userDetails'], false)
        .setIn(['error', 'userDetails'], '');

    case ACTIONS.FETCH_USER_DETAILS_FAILURE:
      return state
        .set('userDetails', fromJS({}))
        .setIn(['loading', 'userDetails'], false)
        .setIn(['error', 'userDetails'], action.payload.toString());

    case ACTIONS.FETCH_WANT_TO_READ_BOOKS:
      return state.setIn(['loading', 'wantToRead'], true);

    case ACTIONS.FETCH_WANT_TO_READ_BOOKS_SUCCESS:
      return state
        .set('wantToRead', fromJS(action.payload.data))
        .setIn(['loading', 'wantToRead'], false)
        .setIn(['error', 'wantToRead'], '');

    case ACTIONS.FETCH_WANT_TO_READ_BOOKS_FAILURE:
      return state
        .set('wantToRead', fromJS([]))
        .setIn(['loading', 'wantToRead'], false)
        .setIn(['error', 'wantToRead'], action.payload.toString());

    case ACTIONS.FETCH_READING_BOOKS:
      return state.setIn(['loading', 'reading'], true);

    case ACTIONS.FETCH_READING_BOOKS_SUCCESS:
      return state
        .set('reading', fromJS(action.payload.data))
        .setIn(['loading', 'reading'], false)
        .setIn(['error', 'reading'], '');

    case ACTIONS.FETCH_READING_BOOKS_FAILURE:
      return state
        .set('reading', fromJS([]))
        .setIn(['loading', 'reading'], false)
        .setIn(['error', 'reading'], action.payload.toString());

    case ACTIONS.FETCH_BOOKS_IN_COMMON:
      return state.setIn(['loading', 'booksInCommon'], true);

    case ACTIONS.FETCH_BOOKS_IN_COMMON_SUCCESS:
      return state
        .set('booksInCommon', fromJS(action.payload.data))
        .setIn(['loading', 'booksInCommon'], false)
        .setIn(['error', 'booksInCommon'], '');

    case ACTIONS.FETCH_BOOKS_IN_COMMON_FAILURE:
      return state
        .set('booksInCommon', fromJS([]))
        .setIn(['loading', 'booksInCommon'], false)
        .setIn(['error', 'booksInCommon'], action.payload.toString());

    default:
      return state;
  }
}
