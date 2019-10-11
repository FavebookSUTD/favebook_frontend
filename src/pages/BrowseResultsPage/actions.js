const ACTIONS = {
  FETCH_BOOK_RESULTS: '@pages/HomePage/FETCH_BOOK_RESULTS',
  FETCH_BOOK_RESULTS_SUCCESS: '@pages/HomePage/FETCH_BOOK_RESULTS_SUCCESS',
  FETCH_BOOK_RESULTS_FAILURE: '@pages/HomePage/FETCH_BOOK_RESULTS_FAILURE',
  FETCH_PAGENUM: '@pages/HomePage/FETCH_PAGENUM',
  FETCH_PAGENUM_SUCCESS: '@pages/HomePage/FETCH_PAGENUM_SUCCESS',
  FETCH_PAGENUM_FAILURE: '@pages/HomePage/FETCH_PAGENUM_FAILURE',
};

export default ACTIONS;

export const fetchBookResults = () => ({
  type: ACTIONS.FETCH_BOOK_RESULTS,
});

export const fetchPageNum = () => ({
  type: ACTIONS.FETCH_PAGENUM,
});
