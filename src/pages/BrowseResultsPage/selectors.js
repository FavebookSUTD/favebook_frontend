import { select } from '@utils/selectorUtils';
import { initialState } from './reducers';

const selectBrowseResultsPage = state => state.get('BrowseResultsPage', initialState);

const selectLoading = select(selectBrowseResultsPage, 'loading');

const selectError = select(selectBrowseResultsPage, 'error');

export { selectLoading, selectError };
