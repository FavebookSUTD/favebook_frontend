import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';

const selectMyBookPage = state => state.get('MyBookPage', initialState);

const selectLoading = selectToJS(selectMyBookPage, 'loading');

const selectError = selectToJS(selectMyBookPage, 'error');

const selectWantToRead = selectToJS(selectMyBookPage, 'wantToRead');

const selectReading = selectToJS(selectMyBookPage, 'reading');

const selectMyReviews = selectToJS(selectMyBookPage, 'myReviews');

const selectTotalReviewCount = select(selectMyBookPage, 'totalReviewCount');

const selectCurrentReviewPageNum = select(selectMyBookPage, 'currentReviewPageNum');

export {
  selectLoading,
  selectError,
  selectWantToRead,
  selectReading,
  selectMyReviews,
  selectTotalReviewCount,
  selectCurrentReviewPageNum,
};
