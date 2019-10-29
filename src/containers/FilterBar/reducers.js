import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  error: { search: '', autocomplete: '' },
  loading: { autocomplete: true, search: true },
  autoResults: [],
  searchResults: [],
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SEARCH_BOOKS:
      return state.setIn(['loading', 'search'], true).set('searchResults', fromJS([]));

    case ACTIONS.SEARCH_BOOKS_SUCCESS:
      return state
        .set('searchResults', fromJS(action.payload.data))
        .setIn(['loading', 'search'], false);

    case ACTIONS.SEARCH_BOOKS_FAILURE:
      return state
        .setIn(['error', 'search'], action.payload.toString('Something went wrong.'))
        .setIn(['loading', 'search'], false);

    case ACTIONS.AUTOCOMPLETE_BOOKS:
      return state.setIn(['loading', 'search'], true).set('autoResults', fromJS([]));

    case ACTIONS.AUTOCOMPLETE_BOOKS_SUCCESS:
      return state
        .set('autoResults', fromJS(action.payload.data))
        .setIn(['loading', 'autocomplete'], false);

    case ACTIONS.AUTOCOMPLETE_BOOKS_FAILURE:
      return state
        .setIn(['error', 'autocomplete'], action.payload.toString('Something went wrong.'))
        .setIn(['loading', 'autocomplete'], false);

    default:
      return state;
  }
}
