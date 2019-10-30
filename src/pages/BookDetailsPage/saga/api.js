import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function fetchBookDetails({ payload }) {
  return api.get({
    url: apiConfig.books.info.replace('{asin}', payload),
  });
}

export function fetchBookReviews({ payload }) {
  const { bookId, pageNum, pageSize } = payload;

  return api.get({
    url: apiConfig.books.reviews.replace('{asin}', bookId),
    query: {
      'pg-num': pageNum,
      'pg-size': pageSize,
    },
  });
}
