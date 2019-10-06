import { select, selectToJS } from '@utils/selectorUtils';
import { initialState } from './reducers';

const selectAuthForm = state => state.get('AuthForm', initialState);

export {};
