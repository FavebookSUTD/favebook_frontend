import { select } from '@utils/selectorUtils';
import { initialState } from './reducers';

const selectUserReview = state => state.get('BookDetailsPage.UserReview', initialState);

const selectRating = select(selectUserReview, 'rating');

const selectLoading = select(selectUserReview, 'loading');

const selectError = select(selectUserReview, 'error');

export { selectRating, selectLoading, selectError };
