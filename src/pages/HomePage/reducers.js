import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  loading: false,
  error: '',
  recommendBooks: [],
  bestsellBooks: [],
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.FETCH_RECOMMEND_BOOKLIST_SUCCESS:
      return state.set('recommendBooks', fromJS(action.payload.data));

    case ACTIONS.FETCH_BESTSELL_BOOKLIST_SUCCESS:
      return state.set('bestsellBooks', fromJS(action.payload.data));

    default:
      return state;
  }
}
