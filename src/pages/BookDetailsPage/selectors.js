import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';

const selectBookDetailsPage = state => state.get('BookDetailsPage', initialState);

const selectBook = selectToJS(selectBookDetailsPage, 'book');

const selectReviews = selectToJS(selectBookDetailsPage, 'reviews');

const selectReviewCount = select(selectBookDetailsPage, 'reviewCount');

const selectLoading = selectToJS(selectBookDetailsPage, 'loading');

const selectError = selectToJS(selectBookDetailsPage, 'error');

export { selectBook, selectReviews, selectReviewCount, selectLoading, selectError };
