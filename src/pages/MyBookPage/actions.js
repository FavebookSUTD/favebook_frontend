const ACTIONS = {
  FETCH_WANT_TO_READ: '@pages/MyBookPage/FETCH_WANT_TO_READ',
  FETCH_WANT_TO_READ_SUCCESS: '@pages/MyBookPage/FETCH_WANT_TO_READ_SUCCESS',
  FETCH_WANT_TO_READ_FAILURE: '@pages/MyBookPage/FETCH_WANT_TO_READ_FAILURE',
  FETCH_READING: '@pages/MyBookPage/FETCH_READING',
  FETCH_READING_SUCCESS: '@pages/MyBookPage/FETCH_READING_SUCCESS',
  FETCH_READING_FAILURE: '@pages/MyBookPage/FETCH_READING_FAILURE',
  FETCH_MY_REVIEWS: '@pages/MyBookPage/FETCH_MY_REVIEWS',
  FETCH_MY_REVIEWS_SUCCESS: '@pages/MyBookPage/FETCH_MY_REVIEWS_SUCCESS',
  FETCH_MY_REVIEWS_FAILURE: '@pages/MyBookPage/FETCH_MY_REVIEWS_SUCCESS',
};

export default ACTIONS;

export const fetchWantToRead = () => ({
  type: ACTIONS.FETCH_WANT_TO_READ,
});

export const fetchReading = () => ({
  type: ACTIONS.FETCH_READING,
});

export const fetchMyReviews = () => ({
  type: ACTIONS.FETCH_MY_REVIEWS,
});
