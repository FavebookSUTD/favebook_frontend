import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  book: {},
  reviews: [],
  reviewCount: 0,
  loading: {
    book: false,
    reviews: false,
  },
  error: {
    book: '',
    reviews: '',
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

    case ACTIONS.FETCH_INIT_BOOK_REVIEWS:
      return state.setIn(['loading', 'reviews'], true);

    case ACTIONS.FETCH_INIT_BOOK_REVIEWS_SUCCESS:
      return state
        .set('reviews', fromJS(action.payload.data.reviews))
        .set('reviewCount', action.payload.data.num_reviews)
        .setIn(['loading', 'reviews'], false)
        .setIn(['error', 'reviews'], '');

    case ACTIONS.FETCH_INIT_BOOK_REVIEWS_FAILURE:
      return state
        .set('reviews', fromJS([]))
        .setIn(['loading', 'reviews'], false)
        .setIn(['error', 'book'], action.payload.toString());

    case ACTIONS.FETCH_NEXT_BOOK_REVIEWS_SUCCESS:
      return state
        .update('reviews', reviews => reviews.merge(fromJS(action.payload.data.reviews)))
        .set('reviewCount', action.payload.data.num_reviews)
        .setIn(['error', 'reviews'], '');

    default:
      return state;
  }
}
