const ACTIONS = {
  SEARCH_BOOKS: '@containers/FilterBar/SEARCH_BOOKS',
  SEARCH_BOOKS_SUCCESS: '@containers/FilterBar/SEARCH_BOOKS_SUCCESS',
  SEARCH_BOOKS_FAILURE: '@containers/FilterBar/SEARCH_BOOKS_FAILURE',
};

export default ACTIONS;

export const searchBooks = searchVal => ({
  type: ACTIONS.SEARCH_BOOKS,
  payload: searchVal,
});
