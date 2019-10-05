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
  return {};
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

export function fetchRecommendBookList() {
  const bookList = require('./mock/mockBookList.json');
  return bookList.data;
}

export function fetchBestsellBookList() {
  const bookList = require('./mock/mockBookList.json');
  return bookList.data;
}
