import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';

const selectUserPage = state => state.get('UserPage', initialState);

const selectBooksInCommon = selectToJS(selectUserPage, 'commonBooks');

const selectLoading = select(selectUserPage, 'loading');

export { selectBooksInCommon, selectLoading };
