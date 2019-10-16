import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  books: {},
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.FETCH_BOOKS_IN_COMMON:
      return state.set('loading', false);

    case ACTIONS.FETCH_BOOKS_IN_COMMON_SUCCESS:
      return state.setIn(['commonBooks'], fromJS(action.payload.books)).set('loading', false);

    case ACTIONS.FETCH_BOOKS_IN_COMMON_FAILURE:
      return state.set('error', action.payload.stringify()).set('loading', false);

    default:
      return state;
  }
}
