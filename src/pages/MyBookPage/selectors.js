import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';

const selectMyBookPage = state => state.get('MyBookPage', initialState);

const selectLoading = selectToJS(selectMyBookPage, 'loading');

const selectWantToRead = selectToJS(selectMyBookPage, 'wantToRead');

const selectReading = selectToJS(selectMyBookPage, 'reading');

const selectMyReviews = selectToJS(selectMyBookPage, 'myReviews');

export { selectLoading, selectWantToRead, selectReading, selectMyReviews };
