import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  loading: false,
  error: '',
  pageSize: 5,
  total: 0,
  books: {},
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.FETCH_BOOK_RESULTS:
      return state.set('loading', false);

    case ACTIONS.FETCH_BOOK_RESULTS_SUCCESS:
      return state
        .setIn(['books', action.payload.pageNum], fromJS(action.payload.books))
        .set('total', action.payload.total)
        .set('loading', false);

    case ACTIONS.FETCH_BOOK_RESULTS_FAILURE:
      return state.set('error', action.payload.stringify()).set('loading', false);

    default:
      return state;
  }
}
