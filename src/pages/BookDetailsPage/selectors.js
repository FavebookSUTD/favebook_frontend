import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';
import { initialState as FilterBarState } from '@containers/FilterBar/reducers';

const selectBookDetailsPage = state => state.get('BookDetailsPage', initialState);
const selcetFilterBar = state => state.get('FilterBar', FilterBarState);

const selectLoading = select(selectBookDetailsPage, 'loading');

const selectError = select(selectBookDetailsPage, 'error');

export { selectLoading, selectError };
