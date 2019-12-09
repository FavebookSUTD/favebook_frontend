const ACTIONS = {
  FETCH_USER_DETAILS: '@pages/UserPage/FETCH_USER_DETAILS',
  FETCH_USER_DETAILS_SUCCESS: '@pages/UserPage/FETCH_USER_DETAILS_SUCCESS',
  FETCH_USER_DETAILS_FAILURE: '@pages/UserPage/FETCH_USER_DETAILS_FAILURE',
  FETCH_FAVOURITE: '@pages/UserPage/FETCH_FAVOURITE',
  FETCH_FAVOURITE_SUCCESS: '@pages/UserPage/FETCH_FAVOURITE_SUCCESS',
  FETCH_FAVOURITE_FAILURE: '@pages/UserPage/FETCH_FAVOURITE_FAILURE',
  FETCH_BOOKS_REVIEWED: '@pages/UserPage/FETCH_BOOKS_REVIEWED',
  FETCH_BOOKS_REVIEWED_SUCCESS: '@pages/UserPage/FETCH_BOOKS_REVIEWED_SUCCESS',
  FETCH_BOOKS_REVIEWED_FAILURE: '@pages/UserPage/FETCH_BOOKS_REVIEWED_FAILURE',
};

export default ACTIONS;

export const fetchUserDetails = userId => ({
  type: ACTIONS.FETCH_USER_DETAILS,
  payload: userId,
});

export const fetchFavourite = userId => ({
  type: ACTIONS.FETCH_FAVOURITE,
  payload: userId,
});

export const fetchBooksReviewed = userId => ({
  type: ACTIONS.FETCH_BOOKS_REVIEWED,
  payload: userId,
});
