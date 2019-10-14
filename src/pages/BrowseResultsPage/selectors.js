import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';
import { initialState as FilterBarState } from '@containers/FilterBar/reducers';

const selectFilterBar = state => state.get('FilterBar', FilterBarState);

const selectSearchResults = select(selectFilterBar, 'searchResults');

const selectBrowseResultsPage = state => state.get('BrowseResultsPage', initialState);

const selectLoading = select(selectBrowseResultsPage, 'loading');

const selectError = select(selectBrowseResultsPage, 'error');

const selectPageSize = select(selectBrowseResultsPage, 'pageSize');

const selectTotal = select(selectBrowseResultsPage, 'total');

const selectNextPage = selectToJS(selectBrowseResultsPage, 'books');

export {
  selectLoading,
  selectError,
  selectPageSize,
  selectTotal,
  selectNextPage,
  selectSearchResults,
};
