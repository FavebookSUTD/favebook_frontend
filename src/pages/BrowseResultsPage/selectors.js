import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';

const selectBrowseResultsPage = state => state.get('BrowseResultsPage', initialState);

const selectPageNum = select(selectBrowseResultsPage, 'pageNum');

const selectBookResults = selectToJS(selectBrowseResultsPage, 'bookResults');

export { selectPageNum, selectBookResults };
