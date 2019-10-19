import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  loading: {
    wantToRead: false,
    reading: false,
    myReviews: false,
  },
  wantToRead: [],
  reading: [],
  myReviews: [],
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
