import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';
import { createSelector } from 'reselect';

const selectAppLayout = state => state.get('AppLayout', initialState);

const selectUserInfo = selectToJS(selectAppLayout, 'user');

const selectLoggedIn = createSelector(
  selectAppLayout,
  state => {
    const user = state.get('user').toObject();
    const { username, userID, token } = user;
    return username && userID && token;
  },
);

const selectLoading = select(selectAppLayout, 'loading');

const selectError = select(selectAppLayout, 'error');

const selectGenres = selectToJS(selectAppLayout, 'genres');

export { selectUserInfo, selectLoggedIn, selectLoading, selectError, selectGenres };
