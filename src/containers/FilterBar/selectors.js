import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';

const selectFilterBar = state => state.get('FilterBar', initialState);

const selectError = selectToJS(selectFilterBar, 'error');

const selectLoading = selectToJS(selectFilterBar, 'loading');

const selectSearchResult = selectToJS(selectFilterBar, 'searchResults');

const selectAutoResult = selectToJS(selectFilterBar, 'autoResults');

export { selectError, selectLoading, selectSearchResult, selectAutoResult };
