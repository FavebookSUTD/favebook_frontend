import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';

const selectBrowseResultsPage = state => state.get('BrowseResultsPage', initialState);

const selectLoading = select(selectBrowseResultsPage, 'loading');

const selectError = select(selectBrowseResultsPage, 'error');

const selectNextPage = selectToJS(selectBrowseResultsPage, 'books');

export { selectLoading, selectError, selectNextPage };
