import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function fetchBooksInCommon({}) {
  // TODO: Connect to real api

  const bookList = require('./mock/mockBookList.json');
  const newBookList = { ...bookList.data };

  return newBookList;
}
