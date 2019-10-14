import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';

const selectBookDetailsPage = state => state.get('BookDetailsPage', initialState);

const selectBook = selectToJS(selectBookDetailsPage, 'book');

const selectLoading = select(selectBookDetailsPage, 'loading');

const selectError = select(selectBookDetailsPage, 'error');

export { selectBook, selectLoading, selectError };
