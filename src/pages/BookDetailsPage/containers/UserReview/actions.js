const ACTIONS = {
  FETCH_USER_RATING: '@pages/BookDetailsPage/UserReview/FETCH_USER_RATING',
  FETCH_USER_RATING_SUCCESS: '@pages/BookDetailsPage/UserReview/FETCH_USER_RATING_SUCCESS',
  FETCH_USER_RATING_FAILURE: '@pages/BookDetailsPage/UserReview/FETCH_USER_RATING_FAILURE',
  UPDATE_USER_RATING: '@pages/BookDetailsPage/UserReview/UPDATE_USER_RATING',
  UPDATE_USER_RATING_SUCCESS: '@pages/BookDetailsPage/UserReview/UPDATE_USER_RATING_SUCCESS',
  UPDATE_USER_RATING_FAILURE: '@pages/BookDetailsPage/UserReview/UPDATE_USER_RATING_FAILURE',
  SUBMIT_USER_REVIEW: '@pages/BookDetailsPage/UserReview/SUBMIT_USER_REVIEW',
  SUBMIT_USER_REVIEW_SUCCESS: '@pages/BookDetailsPage/UserReview/SUBMIT_USER_REVIEW_SUCCESS',
  SUBMIT_USER_REVIEW_FAILURE: '@pages/BookDetailsPage/UserReview/SUBMIT_USER_REVIEW_FAILURE',
};

export default ACTIONS;

export const fetchUserRating = () => ({
  type: ACTIONS.FETCH_USER_RATING,
});

export const updateUserRating = (id, rating) => ({
  type: ACTIONS.UPDATE_USER_RATING,
  payload: {
    id,
    rating,
  },
});

export const submitUserReview = (id, review) => ({
  type: ACTIONS.SUBMIT_USER_REVIEW,
  payload: {
    id,
    review,
  },
});
