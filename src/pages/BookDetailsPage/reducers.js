import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  book: {
    title: '',
    author: '',
    ratingValue: null,
    commentCount: null,
    purchaseLinks: {},
    genres: [],
    summary: '',
    details: {},
    bookCoverURL: '',
    interestStatus: {},
  },
  reviews: [],
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
        .set(
          'book',
          fromJS({
            title: '',
            author: '',
            ratingValue: null,
            commentCount: null,
            purchaseLinks: {},
            genres: [],
            summary: '',
            details: {},
            bookCoverURL: '',
            interestStatus: {},
          }),
        )
        .setIn(['loading', 'book'], false)
        .setIn(['error', 'book'], action.payload.toString());

    case ACTIONS.FETCH_BOOK_REVIEWS:
      return state.setIn(['loading', 'reviews'], true);

    case ACTIONS.FETCH_BOOK_REVIEWS_SUCCESS:
      return state
        .set('reviews', fromJS(action.payload.data))
        .setIn(['loading', 'reviews'], false)
        .setIn(['error', 'reviews'], '');

    case ACTIONS.FETCH_BOOK_REVIEWS_FAILURE:
      return state
        .set('reviews', fromJS([]))
        .setIn(['loading', 'reviews'], false)
        .setIn(['error', 'book'], action.payload.toString());

    default:
      return state;
  }
}
