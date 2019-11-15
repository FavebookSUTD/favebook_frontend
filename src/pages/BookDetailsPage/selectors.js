import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';

const selectBookDetailsPage = state => state.get('BookDetailsPage', initialState);

const selectBook = selectToJS(selectBookDetailsPage, 'book');

const selectReviews = selectToJS(selectBookDetailsPage, 'reviews');

const selectTotalReviewCount = select(selectBookDetailsPage, 'totalReviewCount');

const selectCurrentReviewPageNum = select(selectBookDetailsPage, 'currentReviewPageNum');

const selectLoading = selectToJS(selectBookDetailsPage, 'loading');

const selectError = selectToJS(selectBookDetailsPage, 'error');

export {
  selectBook,
  selectReviews,
  selectTotalReviewCount,
  selectCurrentReviewPageNum,
  selectLoading,
  selectError,
};
