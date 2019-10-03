const ACTIONS = {
  LOGIN_FROM_API: '@pages/Home/LOGIN_FROM_API',
  LOGIN_FROM_STORAGE: '@pages/Home/LOGIN_FROM_STORAGE',
  LOGIN_SUCCESS: '@pages/Home/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@pages/Home/LOGIN_FAILURE',
};

export default ACTIONS;

export const loginFromAPI = token => ({
  type: ACTIONS.LOGIN_FROM_API,
  payload: token,
});

export const loginFromStorage = () => ({
  type: ACTIONS.LOGIN_FROM_STORAGE,
});
