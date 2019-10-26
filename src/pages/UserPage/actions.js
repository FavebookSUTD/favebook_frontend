const ACTIONS = {
  FETCH_USER_DETAILS: '@pages/UserPage/FETCH_USER_DETAILS',
  FETCH_USER_DETAILS_SUCCESS: '@pages/UserPage/FETCH_USER_DETAILS_SUCCESS',
  FETCH_USER_DETAILS_FAILURE: '@pages/UserPage/FETCH_USER_DETAILS_FAILURE',
  FETCH_WANT_TO_READ_BOOKS: '@pages/UserPage/FETCH_WANT_TO_READ_BOOKS',
  FETCH_WANT_TO_READ_BOOKS_SUCCESS: '@pages/UserPage/FETCH_WANT_TO_READ_BOOKS_SUCCESS',
  FETCH_WANT_TO_READ_BOOKS_FAILURE: '@pages/UserPage/FETCH_WANT_TO_READ_BOOKS_FAILURE',
  FETCH_READING_BOOKS: '@pages/UserPage/FETCH_READING_BOOKS',
  FETCH_READING_BOOKS_SUCCESS: '@pages/UserPage/FETCH_READING_BOOKS_SUCCESS',
  FETCH_READING_BOOKS_FAILURE: '@pages/UserPage/FETCH_READING_BOOKS_FAILURE',
  FETCH_BOOKS_IN_COMMON: '@pages/UserPage/FETCH_BOOKS_IN_COMMON',
  FETCH_BOOKS_IN_COMMON_SUCCESS: '@pages/UserPage/FETCH_BOOKS_IN_COMMON_SUCCESS',
  FETCH_BOOKS_IN_COMMON_FAILURE: '@pages/UserPage/FETCH_BOOKS_IN_COMMON_FAILURE',
};

export default ACTIONS;

export const fetchUserDetails = userId => ({
  type: ACTIONS.FETCH_USER_DETAILS,
  payload: userId,
});

export const fetchWantToReadBooks = userId => ({
  type: ACTIONS.FETCH_WANT_TO_READ_BOOKS,
  payload: userId,
});

export const fetchReadingBooks = userId => ({
  type: ACTIONS.FETCH_READING_BOOKS,
  payload: userId,
});

export const fetchBooksInCommon = userId => ({
  type: ACTIONS.FETCH_BOOKS_IN_COMMON,
  payload: userId,
});
