import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function loginFromStorage() {
  const {
    sessionStorage: { user },
  } = window;

  if (user) {
    const userCredentials = JSON.parse(user);
    return userCredentials;
  }
  throw new Error('User credential not found!');
}

export function fetchGenres() {
  // TODO: Connect to real api
  const genres = require('./mock/mockGenres.json');
  return genres.data;
}
