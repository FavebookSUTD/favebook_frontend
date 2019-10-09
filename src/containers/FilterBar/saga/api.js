import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function searchBooks({ payload }) {
  // TODO: Connect to real api
  if (payload) {
    return fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(body => body.results);
  }
  return [];
}
