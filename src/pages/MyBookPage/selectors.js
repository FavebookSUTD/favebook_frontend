import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';

const selectMyBookPage = state => state.get('MyBookPage', initialState);

export {};
