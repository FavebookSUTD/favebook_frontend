import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function searchBooks({ payload }) {
  // TODO: Connect to real api
  if (payload) {
    return api
      .get({
        url: `${apiConfig.books.search}/${payload.searchVal}`,
      })
      .then(body => body.json)
      .then(result => result.data);
  }
  return [];
}

export function autocompleteBooks({ payload }) {
  // TODO: Connect to real api
  if (payload) {
    return api
      .get({
        url: `${apiConfig.books.autocomplete}/${payload.autocompleteVal}/5`,
      })
      .then(body => body.json)
      .then(result => result.data);
  }
  return [];
}
