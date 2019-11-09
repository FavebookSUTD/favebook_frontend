import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';
import { createSelector } from 'reselect';
import uniqBy from 'lodash/uniqBy';

const selectFilterBar = state => state.get('FilterBar', initialState);

const selectError = selectToJS(selectFilterBar, 'error');

const selectLoading = selectToJS(selectFilterBar, 'loading');

const selectSearchResults = selectToJS(selectFilterBar, 'searchResults');

const selectAutocompleteResultsPartial = createSelector(
  selectFilterBar,
  state => {
    const test = state
      .get('autocompleteResults')
      .slice(0, 5)
      .toJS();
    return test;
  },
);
const selectAutocompleteResultsFull = selectToJS(selectFilterBar, 'autocompleteResults');

const selectCurrentSearchVal = select(selectFilterBar, 'currentSearchVal');

const selectAllResults = createSelector(
  selectFilterBar,
  state => {
    const searchResults = state.get('searchResults');
    const autoCompleteResults = state.get('autocompleteResults');
    const allResults = searchResults.concat(autoCompleteResults).toJS();
    return uniqBy(allResults, 'asin');
  },
);

export {
  selectError,
  selectLoading,
  selectSearchResults,
  selectAutocompleteResultsPartial,
  selectAutocompleteResultsFull,
  selectCurrentSearchVal,
  selectAllResults,
};
