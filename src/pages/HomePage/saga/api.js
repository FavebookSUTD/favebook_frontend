import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function fetchRecommendBookList() {
  // TODO: Connect to real api
  const bookList = require('./mock/mockBookList.json');
  return bookList.data;
}

export function fetchBestsellBookList() {
  // TODO: Connect to real api
  const bookList = require('./mock/mockBookList.json');
  return bookList.data;
}
