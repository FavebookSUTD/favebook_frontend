import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  user: {
    userID: '',
    token: '',
  },
  loading: true,
  error: '',
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

    default:
      return state;
  }
}
