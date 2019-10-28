import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  error: '',
  fetching: false,
  fetchingautocomplete: false,
  errorAuto: '',
  searchResults: [],
  autocompleteResults: [],
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SEARCH_BOOKS:
      return state.set('fetching', true).set('searchResults', fromJS([]));

    case ACTIONS.SEARCH_BOOKS_SUCCESS:
      return state.set('searchResults', fromJS(action.payload)).set('fetching', false);

    case ACTIONS.SEARCH_BOOKS_FAILURE:
      return state.set('error', 'Something went wrong.').set('fetching', false);

    case ACTIONS.AUTOCOMPLETE_BOOKS:
      return state.set('fetchingautocomplete', true).set('autocompleteResults', fromJS([]));

    case ACTIONS.AUTOCOMPLETE_BOOKS_SUCCESS:
      return state
        .set('autocompleteResults', fromJS(action.payload))
        .set('fetchingautocomplete', false);

    case ACTIONS.AUTOCOMPLETE_BOOKS_FAILURE:
      return state.set('errorAuto', 'Something went wrong.').set('fetchingautocomplete', false);

    default:
      return state;
  }
}
