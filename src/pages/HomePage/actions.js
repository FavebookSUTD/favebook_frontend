const ACTIONS = {
  LOGIN_FROM_API: '@pages/HomePage/LOGIN_FROM_API',
  LOGIN_FROM_STORAGE: '@pages/HomePage/LOGIN_FROM_STORAGE',
  LOGIN_SUCCESS: '@pages/HomePage/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@pages/HomePage/LOGIN_FAILURE',
  FETCH_RECOMMEND_BOOKLIST: '@pages/HomePage/FETCH_RECOMMEND_BOOKLIST',
  FETCH_RECOMMEND_BOOKLIST_SUCCESS: '@pages/HomePage/FETCH_RECOMMEND_BOOKLIST_SUCCESS',
  FETCH_RECOMMEND_BOOKLIST_FAILURE: '@pages/HomePage/FETCH_RECOMMEND_BOOKLIST_FAILURE',
  FETCH_BESTSELL_BOOKLIST: '@pages/HomePage/FETCH_BESTSELL_BOOKLIST',
  FETCH_BESTSELL_BOOKLIST_SUCCESS: '@pages/HomePage/FETCH_BESTSELL_BOOKLIST_SUCCESS',
  FETCH_BESTSELL_BOOKLIST_FAILURE: '@pages/HomePage/FETCH_BESTSELL_BOOKLIST_FAILURE',
  FETCH_GENRES: '@pages/HomePage/FETCH_GENRES',
  FETCH_GENRES_SUCCESS: '@pages/HomePage/FETCH_GENRES_SUCCESS',
  FETCH_GENRES_FAILURE: '@pages/HomePage/FETCH_GENRES_FAILURE',
};

export default ACTIONS;

export const loginFromAPI = token => ({
  type: ACTIONS.LOGIN_FROM_API,
  payload: token,
});

export const loginFromStorage = () => ({
  type: ACTIONS.LOGIN_FROM_STORAGE,
});

export const fetchRecommendBookList = () => ({
  type: ACTIONS.FETCH_RECOMMEND_BOOKLIST,
});

export const fetchBestsellBookList = () => ({
  type: ACTIONS.FETCH_BESTSELL_BOOKLIST,
});

export const fetchGenres = () => ({
  type: ACTIONS.FETCH_GENRES,
});
