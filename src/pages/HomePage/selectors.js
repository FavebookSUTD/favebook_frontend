import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';

const selectHomePage = state => state.get('HomePage', initialState);

const selectLoading = select(selectHomePage, 'loading');

const selectError = select(selectHomePage, 'error');

const selectRecommendBooks = selectToJS(selectHomePage, 'recommendBooks');

const selectBestsellBooks = selectToJS(selectHomePage, 'bestsellBooks');

export { selectLoading, selectError, selectRecommendBooks, selectBestsellBooks };
