import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';

// const selectFilterBar = state => state.get('FilterBar', initialState);

// const selectError = select(selectFilterBar, 'erro');

// const selectFetching = select(selectFilterBar, 'loading');

// const selectSearchResult = selectToJS(selectFilterBar, 'results');

// const selectErrorAuto = select(selectFilterBar, 'errorAuto');

// const selectFetchingAuto = select(selectFilterBar, 'fetchautocomplete');

// const selectAutoResult = selectToJS(selectFilterBar, 'autocompleteResults');

const selectFilterBar = state => state.get('FilterBar', initialState);

const selectError = select(selectFilterBar, 'error');

const selectFetching = select(selectFilterBar, 'loading');

const selectResult = selectToJS(selectFilterBar, 'results');

export { selectError, selectFetching, selectResult };
