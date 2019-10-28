// import { fromJS } from 'immutable';
// import ACTIONS from './actions';

// export const initialState = fromJS({
//   error: '',
//   fetching: false,
//   fetchingautocomplete: false,
//   errorAuto: '',
//   searchResults: [],
//   autocompleteResults: [],
// });

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case ACTIONS.SEARCH_BOOKS:
//       return state.set('fetching', true).set('searchResults', fromJS([]));

//     case ACTIONS.SEARCH_BOOKS_SUCCESS:
//       return state.set('searchResults', fromJS(action.payload)).set('fetching', false);

//     case ACTIONS.SEARCH_BOOKS_FAILURE:
//       return state.set('error', 'Something went wrong.').set('fetching', false);

//     case ACTIONS.AUTOCOMPLETE_BOOKS:
//       return state.set('fetchingautocomplete', true).set('autocompleteResults', fromJS([]));

//     case ACTIONS.AUTOCOMPLETE_BOOKS_SUCCESS:
//       return state
//         .set('autocompleteResults', fromJS(action.payload))
//         .set('fetchingautocomplete', false);

//     case ACTIONS.AUTOCOMPLETE_BOOKS_FAILURE:
//       return state.set('errorAuto', 'Something went wrong.').set('fetchingautocomplete', false);

//     default:
//       return state;
//   }
// }

import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  error: { search: '', autocomplete: '' },
  loading: { autocomplete: true, search: true },
  results: { autocomplete: [], search: [] },
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SEARCH_BOOKS:
      return state.setIn(['loading', 'search'], true).setIn(['results', 'search'], fromJS([]));

    case ACTIONS.SEARCH_BOOKS_SUCCESS:
      return state
        .setIn(['results', 'search'], fromJS(action.payload))
        .setIn(['loading', 'search'], false);

    case ACTIONS.SEARCH_BOOKS_FAILURE:
      return state
        .setIn(['error', 'search'], 'Something went wrong.')
        .setIn(['loading', 'search'], false);

    case ACTIONS.AUTOCOMPLETE_BOOKS:
      return state
        .setIn(['loading', 'search'], true)
        .setIn(['results', 'autocomplete'], fromJS([]));

    case ACTIONS.AUTOCOMPLETE_BOOKS_SUCCESS:
      return state
        .setIn(['results', 'autocomplete'], fromJS(action.payload))
        .setIn(['loading', 'autocomplete'], false);

    case ACTIONS.AUTOCOMPLETE_BOOKS_FAILURE:
      return state
        .setIn(['error', 'autocomplete'], 'Something went wrong.')
        .setIn(['loading', 'autocomplete'], false);

    default:
      return state;
  }
}
