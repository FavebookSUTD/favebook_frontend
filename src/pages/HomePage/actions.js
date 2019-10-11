const ACTIONS = {
  FETCH_RECOMMEND_BOOKLIST: '@pages/HomePage/FETCH_RECOMMEND_BOOKLIST',
  FETCH_RECOMMEND_BOOKLIST_SUCCESS: '@pages/HomePage/FETCH_RECOMMEND_BOOKLIST_SUCCESS',
  FETCH_RECOMMEND_BOOKLIST_FAILURE: '@pages/HomePage/FETCH_RECOMMEND_BOOKLIST_FAILURE',
  FETCH_BESTSELL_BOOKLIST: '@pages/HomePage/FETCH_BESTSELL_BOOKLIST',
  FETCH_BESTSELL_BOOKLIST_SUCCESS: '@pages/HomePage/FETCH_BESTSELL_BOOKLIST_SUCCESS',
  FETCH_BESTSELL_BOOKLIST_FAILURE: '@pages/HomePage/FETCH_BESTSELL_BOOKLIST_FAILURE',
};

export default ACTIONS;

export const fetchRecommendBookList = () => ({
  type: ACTIONS.FETCH_RECOMMEND_BOOKLIST,
});

export const fetchBestsellBookList = () => ({
  type: ACTIONS.FETCH_BESTSELL_BOOKLIST,
});
