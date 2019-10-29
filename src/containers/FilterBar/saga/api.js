import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function searchBooks({ payload }) {
  if (payload) {
    const { searchVal } = payload;
    return api.get({
      url: `${apiConfig.books.search}/"${searchVal}"`,
    });
  }
  return [];
}

export function autocompleteBooks({ payload }) {
  if (payload) {
    const { autocompleteVal } = payload;
    return api.get({
      url: `${apiConfig.books.autocomplete}/${autocompleteVal}/5`,
    });
  }
  return [];
}
