const ACTIONS = {
  FETCH_BOOK_RESULTS: '@pages/HomePage/FETCH_BOOK_RESULTS',
  FETCH_BOOK_RESULTS_SUCCESS: '@pages/HomePage/FETCH_BOOK_RESULTS_SUCCESS',
  FETCH_BOOK_RESULTS_FAILURE: '@pages/HomePage/FETCH_BOOK_RESULTS_FAILURE',
  SET_PAGENUM: '@pages/HomePage/SET_PAGENUM',
  SET_PAGENUM_SUCCESS: '@pages/HomePage/SET_PAGENUM_SUCCESS',
  SET_PAGENUM_FAILURE: '@pages/HomePage/SET_PAGENUM_FAILURE',
};

export default ACTIONS;

export const fetchBookResults = () => ({
  type: ACTIONS.FETCH_BOOK_RESULTS,
});

export const setPageNum = () => ({
  type: ACTIONS.SET_PAGENUM,
});
