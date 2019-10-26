import { selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';

const selectUserPage = state => state.get('UserPage', initialState);

const selectUserDetails = selectToJS(selectUserPage, 'userDetails');

const selectWantToRead = selectToJS(selectUserPage, 'wantToRead');

const selectReading = selectToJS(selectUserPage, 'reading');

const selectBooksInCommon = selectToJS(selectUserPage, 'booksInCommon');

const selectLoading = selectToJS(selectUserPage, 'loading');

const selectError = selectToJS(selectUserPage, 'error');

export {
  selectUserDetails,
  selectWantToRead,
  selectReading,
  selectBooksInCommon,
  selectLoading,
  selectError,
};
