import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function loginFromAPI({ payload }) {
  // TODO: Connect to real api
  return api
    .post({
      url: apiConfig.authentication,
      body: { id_token: payload },
    })
    .then(user => {
      window.sessionStorage.setItem('user', JSON.stringify(user));
      return user;
    });
}
