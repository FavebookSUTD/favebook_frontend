import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function fetchBookDetails({ payload }) {
  const { bookId } = payload;
  try {
    const { username } = JSON.parse(window.sessionStorage.getItem('user'));
    return api.get({
      url: apiConfig.books.info.replace('{asin}', bookId),
      needAuthenticate: true,
    });
  } catch {
    return api.get({
      url: apiConfig.books.info.replace('{asin}', bookId),
    });
  }
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

export function faveBook({ payload }) {
  const { isFaved, bookId } = payload;
  if (isFaved) {
    return api.post({
      url: apiConfig.books.favourites,
      body: {
        book_asin: bookId,
      },
      needAuthenticate: true,
    });
  }
  return api.delete({
    url: apiConfig.books.favourites,
    body: {
      book_asin: bookId,
    },
    needAuthenticate: true,
  });
}
