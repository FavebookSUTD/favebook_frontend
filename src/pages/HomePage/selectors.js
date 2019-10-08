import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';
import { createSelector } from 'reselect';

const selectHomePage = state => state.get('HomePage', initialState);

const selectUserInfo = selectToJS(selectHomePage, 'user');

const selectLoggedIn = createSelector(
  selectHomePage,
  state => {
    const user = state.get('user').toObject();
    const { userID, token } = user;
    if (userID && token) {
      return true;
    }
    return false;
  },
);

const selectLoading = select(selectHomePage, 'loading');

const selectError = select(selectHomePage, 'error');

const selectFetching = select(selectHomePage, 'fetching');

const selectRecommendBooks = selectToJS(selectHomePage, 'recommendBooks');

const selectBestsellBooks = selectToJS(selectHomePage, 'bestsellBooks');

const selectSearchResult = selectToJS(selectHomePage, 'searchResults');

const selectGenres = selectToJS(selectHomePage, 'genres');

export {
  selectUserInfo,
  selectLoggedIn,
  selectLoading,
  selectError,
  selectFetching,
  selectRecommendBooks,
  selectBestsellBooks,
  selectSearchResult,
  selectGenres,
};
