import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';

const selectFilterBar = state => state.get('FilterBar', initialState);

const selectError = select(selectFilterBar, 'error');

const selectFetching = select(selectFilterBar, 'fetching');

const selectSearchResult = selectToJS(selectFilterBar, 'searchResults');

export { selectError, selectFetching, selectSearchResult };
