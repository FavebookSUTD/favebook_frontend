const ACTIONS = {
  FETCH_NEXT_PAGE: '@pages/BrowseResultsPage/FETCH_NEXT_PAGE',
  FETCH_NEXT_PAGE_SUCCESS: '@pages/BrowseResultsPage/FETCH_NEXT_PAGE_SUCCESS',
  FETCH_NEXT_PAGE_FAILURE: '@pages/BrowseResultsPage/FETCH_NEXT_PAGE_FAILURE',
};

export default ACTIONS;

export const fetchNextPage = searchResults => ({
  type: ACTIONS.FETCH_NEXT_PAGE,
  payload: {
    searchResults,
  },
});
