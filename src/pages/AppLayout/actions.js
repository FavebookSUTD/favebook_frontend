const ACTIONS = {
  LOGIN_FROM_STORAGE: '@pages/AppLayout/LOGIN_FROM_STORAGE',
  LOGIN_FROM_STORAGE_SUCCESS: '@pages/AppLayout/LOGIN_FROM_STORAGE_SUCCESS',
  LOGIN_FROM_STORAGE_FAILURE: '@pages/AppLayout/LOGIN_FROM_STORAGE_FAILURE',
  FETCH_GENRES: '@pages/AppLayout/FETCH_GENRES',
  FETCH_GENRES_SUCCESS: '@pages/AppLayout/FETCH_GENRES_SUCCESS',
  FETCH_GENRES_FAILURE: '@pages/AppLayout/FETCH_GENRES_FAILURE',
};

export default ACTIONS;

export const loginFromStorage = () => ({
  type: ACTIONS.LOGIN_FROM_STORAGE,
});

export const fetchGenres = () => ({
  type: ACTIONS.FETCH_GENRES,
});
