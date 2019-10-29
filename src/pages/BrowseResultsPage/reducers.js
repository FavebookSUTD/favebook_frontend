import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  loading: false,
  error: '',
  books: {},
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.FETCH_NEXT_PAGE:
      return state.set('loading', true);

    case ACTIONS.FETCH_NEXT_PAGE_SUCCESS:
      return state.set('books', fromJS(action.payload.books)).set('loading', false);

    case ACTIONS.FETCH_NEXT_PAGE_FAILURE:
      return state.set('error', action.payload.toString()).set('loading', false);

    default:
      return state;
  }
}
