import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function fetchUserDetails({ payload }) {
  const mockData = require('./mock/mockUserDetails.json');

  return new Promise(resolve => setTimeout(() => resolve(mockData), 1000));
}

export function fetchFavourite({ payload }) {
  const mockData = require('./mock/mockBookList.json');

  return new Promise(resolve => setTimeout(() => resolve(mockData), 1000));
}

export function fetchBooksReviewed({ payload }) {
  const mockData = require('./mock/mockBookInCommon.json');

  return new Promise(resolve => setTimeout(() => resolve(mockData), 1000));
}
