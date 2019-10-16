const ACTIONS = {
  FETCH_BOOKS_IN_COMMON: '@pages/BrowseResultsPage/FETCH_BOOKS_IN_COMMON',
  FETCH_BOOKS_IN_COMMON_SUCCESS: '@pages/BrowseResultsPage/FETCH_BOOKS_IN_COMMON_SUCCESS',
  FETCH_BOOKS_IN_COMMON_FAILURE: '@pages/BrowseResultsPage/FETCH_BOOKS_IN_COMMON_FAILURE',
};

export default ACTIONS;

export const fetchBooksInCommon = () => ({
  type: ACTIONS.FETCH_BOOKS_IN_COMMON,
});
