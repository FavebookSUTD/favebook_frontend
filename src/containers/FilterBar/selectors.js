import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';
import { createSelector } from 'reselect';

const selectFilterBar = state => state.get('FilterBar', initialState);

const selectError = selectToJS(selectFilterBar, 'error');

const selectLoading = selectToJS(selectFilterBar, 'loading');

const selectSearchResult = selectToJS(selectFilterBar, 'searchResults');

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

export {
  selectError,
  selectLoading,
  selectSearchResult,
  selectAutocompleteResultsPartial,
  selectAutocompleteResultsFull,
  selectCurrentSearchVal,
};
