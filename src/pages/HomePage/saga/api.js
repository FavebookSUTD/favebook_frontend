import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function loginFromStorage() {
  // TODO: Connect to real api
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
  // TODO: Connect to real api
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
  // TODO: Connect to real api
  const bookList = require('./mock/mockBookList.json');
  return bookList.data;
}

export function fetchBestsellBookList() {
  // TODO: Connect to real api
  const bookList = require('./mock/mockBookList.json');
  return bookList.data;
}

export function searchBooks({ payload }) {
  // TODO: Connect to real api
  if (payload) {
    return fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(body => body.results);
  }
  return [];
}

export function fetchGenres() {
  // TODO: Connect to real api
  const genres = require('./mock/mockGenres.json');
  return genres.data;
}
