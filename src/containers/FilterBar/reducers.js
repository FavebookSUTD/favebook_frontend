import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  error: '',
  fetching: false,
  searchResults: [],
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SEARCH_BOOKS:
      return state.set('fetching', true).set('searchResults', fromJS([]));

    case ACTIONS.SEARCH_BOOKS_SUCCESS:
      return state.set('searchResults', fromJS(action.payload)).set('fetching', false);

    case ACTIONS.SEARCH_BOOKS_FAILURE:
      return state.set('error', 'Something went wrong.').set('fetching', false);

    default:
      return state;
  }
}
