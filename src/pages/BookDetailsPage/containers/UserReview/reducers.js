import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  rating: 0,
  loading: false,
  error: '',
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.FETCH_USER_RATING_SUCCESS:
    case ACTIONS.UPDATE_USER_RATING_SUCCESS:
      return state.set('rating', action.payload.rating);

    case ACTIONS.SUBMIT_USER_REVIEW:
      return state.set('loading', true);

    case ACTIONS.SUBMIT_USER_REVIEW_SUCCESS:
      return state.set('loading', false).set('error', '');

    case ACTIONS.SUBMIT_USER_REVIEW_FAILURE:
      return state.set('loading', false).set('error', action.payload.stringify());

    default:
      return state;
  }
}
