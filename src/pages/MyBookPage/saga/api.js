import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function fetchWantToRead() {
  const mockData = require('./mock/mockBookList.json');

  return new Promise(resolve => setTimeout(() => resolve(mockData), 2000));
}

export function fetchReading() {
  const mockData = require('./mock/mockBookList.json');

  return new Promise(resolve => setTimeout(() => resolve(mockData), 2000));
}

export function fetchMyReviews() {
  return {};
}
