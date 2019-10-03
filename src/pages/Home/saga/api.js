import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function loginFromStorage() {
  const {
    localStorage: { user },
  } = window;

  if (user) {
    const userCredentials = JSON.parse(user);
    return userCredentials;
  }

  window.location.href = apiConfig.ADAuthentication;
  return null;
}

export function loginFromAPI({ payload }) {
  return api
    .post({
      url: apiConfig.authentication,
      body: { id_token: payload },
    })
    .then(user => {
      window.localStorage.setItem('user', JSON.stringify(user));
      return user;
    });
}
