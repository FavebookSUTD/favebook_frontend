import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';
import { createSelector } from 'reselect';

const selectHome = state => state.get('Home', initialState);

const selectUserInfo = selectToJS(selectHome, 'user');

const selectLoggedIn = createSelector(
  selectHome,
  state => {
    const user = state.get('user').toObject();
    const { userID, token } = user;
    if (userID && token) {
      return true;
    }
    return false;
  },
);

const selectLoading = select(selectHome, 'loading');

const selectError = select(selectHome, 'error');

export { selectUserInfo, selectLoggedIn, selectLoading, selectError };
