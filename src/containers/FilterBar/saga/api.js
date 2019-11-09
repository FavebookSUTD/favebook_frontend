import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function searchBooks({ payload }) {
  const { searchVal } = payload;

  return api.get({
    url: apiConfig.books.search.replace('{query}', encodeURIComponent(searchVal)),
  });
}

export function autocompleteBooks({ payload }) {
  const { autocompleteVal } = payload;
  return api.get({
    url: apiConfig.books.autocomplete.replace('{prefix}', encodeURIComponent(autocompleteVal)),
  });
}
