import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  userDetails: {},
  favourite: [],
  booksReviewed: [],
  loading: {
    userDetails: false,
    favourite: false,
    booksReviewed: false,
  },
  error: {
    userDetails: '',
    favourite: '',
    booksReviewed: '',
  },
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.FETCH_USER_DETAILS:
      return state.setIn(['loading', 'userDetails'], true);

    case ACTIONS.FETCH_USER_DETAILS_SUCCESS:
      return state
        .set('userDetails', fromJS(action.payload))
        .setIn(['loading', 'userDetails'], false)
        .setIn(['error', 'userDetails'], '');

    case ACTIONS.FETCH_USER_DETAILS_FAILURE:
      return state
        .set('userDetails', fromJS({}))
        .setIn(['loading', 'userDetails'], false)
        .setIn(['error', 'userDetails'], action.payload.toString());

    case ACTIONS.FETCH_FAVOURITE:
      return state.setIn(['loading', 'favourite'], true);

    case ACTIONS.FETCH_FAVOURITE_SUCCESS:
      return state
        .set('favourite', fromJS(action.payload))
        .setIn(['loading', 'favourite'], false)
        .setIn(['error', 'favourite'], '');

    case ACTIONS.FETCH_FAVOURITE_FAILURE:
      return state
        .set('favourite', fromJS([]))
        .setIn(['loading', 'favourite'], false)
        .setIn(['error', 'favourite'], action.payload.toString());

    case ACTIONS.FETCH_BOOKS_REVIEWED:
      return state.setIn(['loading', 'booksReviewed'], true);

    case ACTIONS.FETCH_BOOKS_REVIEWED_SUCCESS:
      return state
        .set('booksReviewed', fromJS(action.payload))
        .setIn(['loading', 'booksReviewed'], false)
        .setIn(['error', 'booksReviewed'], '');

    case ACTIONS.FETCH_BOOKS_REVIEWED_FAILURE:
      return state
        .set('booksReviewed', fromJS([]))
        .setIn(['loading', 'booksReviewed'], false)
        .setIn(['error', 'booksReviewed'], action.payload.toString());

    default:
      return state;
  }
}
