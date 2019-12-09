import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function fetchBookDetails({ payload }) {
  const { bookId } = payload;

  return api.get({
    url: apiConfig.books.info.replace('{asin}', bookId),
  });
}

export function fetchBookReviews({ payload }) {
  const { bookId, pageNum, pageSize } = payload;

  return api
    .get({
      url: apiConfig.books.reviews.replace('{asin}', bookId),
      query: {
        'pg-num': pageNum,
        'pg-size': pageSize,
      },
    })
    .then(({ data }) => ({ data, pageNum }));
}

export function faveBook() {
  return new Promise(resolve => setTimeout(() => resolve({}), 2000));
}
