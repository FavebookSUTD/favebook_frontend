const ACTIONS = {
  FETCH_BOOK_RESULTS: '@pages/BrowseResultsPage/FETCH_BOOK_RESULTS',
  FETCH_BOOK_RESULTS_SUCCESS: '@pages/BrowseResultsPage/FETCH_BOOK_RESULTS_SUCCESS',
  FETCH_BOOK_RESULTS_FAILURE: '@pages/BrowseResultsPage/FETCH_BOOK_RESULTS_FAILURE',
};

export default ACTIONS;

export const fetchBookResults = (pageNum, pageSize) => ({
  type: ACTIONS.FETCH_BOOK_RESULTS,
  payload: {
    pageNum,
    pageSize,
  },
});
