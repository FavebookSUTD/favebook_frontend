import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  loading: false,
  error: '',
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
