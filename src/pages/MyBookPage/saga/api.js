import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function fetchFavourite() {
  const mockData = require('./mock/mockBookList.json');

  return new Promise(resolve => setTimeout(() => resolve(mockData), 2000));
}

export function fetchMyReviews({ payload }) {
  const { username, pageNum, pageSize } = payload;

  return api
    .get({
      url: apiConfig.books.userReviews.replace('{username}', username),
      query: {
        'pg-num': pageNum,
        'pg-size': pageSize,
      },
    })
    .then(({ data }) => ({ data, pageNum }));
}
