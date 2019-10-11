import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function fetchBookResults({ payload: { pageNum, pageSize } }) {
  // TODO: Connect to real api

  const bookList = require('./mock/mockBookList.json');
  const newBookList = { ...bookList.data, pageNum };

  return newBookList;
}
