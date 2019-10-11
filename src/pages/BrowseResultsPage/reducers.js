import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  pageNum: 1,
  pageSize: 5,
  books: [],
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.FETCH_BOOK_RESULTS_SUCCESS:
      return state.set('books', fromJS(action.payload));

    case ACTIONS.SET_PAGENUM_SUCCESS:
      return state.set('pageNum', fromJS(action.payload));

    default:
      return state;
  }
}
