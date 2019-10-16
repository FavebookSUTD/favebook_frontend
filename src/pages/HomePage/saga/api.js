import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function fetchRecommendBookList() {
  return api.get({
    url: `${apiConfig.books.recommendation}/8`,
  });
}

export function fetchBestsellBookList() {
  return api.get({
    url: apiConfig.books.bookList,
  });
}
