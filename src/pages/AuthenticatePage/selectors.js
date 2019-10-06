import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';

const selectAuthenticatePage = state => state.get('AuthenticatePage', initialState);

export {};
