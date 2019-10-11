import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';

const selectBrowseResultsPage = state => state.get('BrowseResultsPage', initialState);

const selectLoading = select(selectBrowseResultsPage, 'loading');

const selectError = select(selectBrowseResultsPage, 'error');

const selectPageSize = select(selectBrowseResultsPage, 'pageSize');

const selectTotal = select(selectBrowseResultsPage, 'total');

const selectBookResults = selectToJS(selectBrowseResultsPage, 'books');

export { selectLoading, selectError, selectPageSize, selectTotal, selectBookResults };
