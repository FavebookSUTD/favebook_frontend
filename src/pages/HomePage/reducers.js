import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  user: {
    userID: '',
    token: '',
  },
  loading: false,
  error: '',
  fetching: false,
  recommendBooks: [],
  bestsellBooks: [],
  searchResults: [],
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.LOGIN_FROM_API:
    case ACTIONS.LOGIN_FROM_STORAGE:
      return state.set('loading', true);

    case ACTIONS.LOGIN_SUCCESS:
      return state.set('user', fromJS(action.payload)).set('loading', false);

    case ACTIONS.LOGIN_FAILURE:
      return state.set('error', 'Something went wrong.').set('loading', false);

    case ACTIONS.FETCH_RECOMMEND_BOOKLIST_SUCCESS:
      return state.set('recommendBooks', fromJS(action.payload));

    case ACTIONS.FETCH_BESTSELL_BOOKLIST_SUCCESS:
      return state.set('bestsellBooks', fromJS(action.payload));

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
