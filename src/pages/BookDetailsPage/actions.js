const ACTIONS = {
  FETCH_BOOK_DETAILS: '@pages/BookDetailsPage/FETCH_BOOK_DETAILS',
  FETCH_BOOK_DETAILS_SUCCESS: '@pages/BookDetailsPage/FETCH_BOOK_DETAILS_SUCCESS',
  FETCH_BOOK_DETAILS_FAILURE: '@pages/BookDetailsPage/FETCH_BOOK_DETAILS_FAILURE',
  FETCH_INIT_BOOK_REVIEWS: '@pages/BookDetailsPage/FETCH_INIT_BOOK_REVIEWS',
  FETCH_INIT_BOOK_REVIEWS_SUCCESS: '@pages/BookDetailsPage/FETCH_INIT_BOOK_REVIEWS_SUCCESS',
  FETCH_INIT_BOOK_REVIEWS_FAILURE: '@pages/BookDetailsPage/FETCH_INIT_BOOK_REVIEWS_FAILURE',
  FETCH_NEXT_BOOK_REVIEWS: '@pages/BookDetailsPage/FETCH_NEXT_BOOK_REVIEWS',
  FETCH_NEXT_BOOK_REVIEWS_SUCCESS: '@pages/BookDetailsPage/FETCH_NEXT_BOOK_REVIEWS_SUCCESS',
  FETCH_NEXT_BOOK_REVIEWS_FAILURE: '@pages/BookDetailsPage/FETCH_NEXT_BOOK_REVIEWS_FAILURE',
};

export default ACTIONS;

export const fetchBookDetails = bookId => ({
  type: ACTIONS.FETCH_BOOK_DETAILS,
  payload: bookId,
});

export const fetchInitBookReviews = (bookId, pageNum, pageSize) => ({
  type: ACTIONS.FETCH_INIT_BOOK_REVIEWS,
  payload: { bookId, pageNum, pageSize },
});

export const fetchNextBookReviews = (bookId, pageNum, pageSize) => ({
  type: ACTIONS.FETCH_NEXT_BOOK_REVIEWS,
  payload: { bookId, pageNum, pageSize },
});
