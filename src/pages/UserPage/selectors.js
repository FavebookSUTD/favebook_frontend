import { selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';

const selectUserPage = state => state.get('UserPage', initialState);

const selectUserDetails = selectToJS(selectUserPage, 'userDetails');

const selectFavourite = selectToJS(selectUserPage, 'favourite');

const selectBooksReviewed = selectToJS(selectUserPage, 'booksReviewed');

const selectLoading = selectToJS(selectUserPage, 'loading');

const selectError = selectToJS(selectUserPage, 'error');

export { selectUserDetails, selectFavourite, selectBooksReviewed, selectLoading, selectError };
