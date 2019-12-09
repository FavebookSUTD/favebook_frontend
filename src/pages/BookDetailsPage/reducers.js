import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  book: {},
  reviews: {},
  totalReviewCount: 0,
  currentReviewPageNum: 0,
  pageSize: 8,
  loading: {
    book: false,
    reviews: false,
    favebook: false,
  },
  error: {
    book: '',
    reviews: '',
    favebook: '',
  },
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.FETCH_BOOK_DETAILS:
      return state.setIn(['loading', 'book'], true);

    case ACTIONS.FETCH_BOOK_DETAILS_SUCCESS:
      return state
        .set('book', fromJS(action.payload.data))
        .setIn(['loading', 'book'], false)
        .setIn(['error', 'book'], '');

    case ACTIONS.FETCH_BOOK_DETAILS_FAILURE:
      return state
        .set('book', fromJS({}))
        .setIn(['loading', 'book'], false)
        .setIn(['error', 'book'], action.payload.toString());

    case ACTIONS.FETCH_BOOK_REVIEWS:
      return state
        .setIn(['loading', 'reviews'], true)
        .set('currentReviewPageNum', action.payload.pageNum);

    case ACTIONS.FETCH_BOOK_REVIEWS_SUCCESS:
      return state
        .setIn(['reviews', action.payload.pageNum], fromJS(action.payload.data.reviews))
        .set('totalReviewCount', action.payload.data.num_reviews)
        .setIn(['loading', 'reviews'], false)
        .setIn(['error', 'reviews'], '');

    case ACTIONS.FETCH_BOOK_REVIEWS_FAILURE:
      return state
        .setIn(['loading', 'reviews'], false)
        .setIn(['error', 'reviews'], action.payload.toString());

    case ACTIONS.RESET_BOOK_REVIEWS:
      return state.set('reviews', fromJS({}));

    case ACTIONS.FAVE_BOOK:
      return state.setIn(['loading', 'favebook'], true);

    case ACTIONS.FAVE_BOOK_SUCCESS:
      return state.setIn(['loading', 'favebook'], false).setIn(['error', 'reviews'], '');

    case ACTIONS.FAVE_BOOK_FAILURE:
      return state
        .setIn(['loading', 'favebook'], false)
        .setIn(['error', 'reviews'], action.payload.toString());

    default:
      return state;
  }
}
