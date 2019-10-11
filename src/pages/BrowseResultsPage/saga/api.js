import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function fetchBookResults() {
  // TODO: Connect to real api
  const bookList = require('./mock/mockBookList.json');
  return bookList.data;
}

export function setPageNum() {
  // TODO: Connect to real api
  const bookList = require('./mock/mockBookList.json');
  return bookList.pageNum;
}
