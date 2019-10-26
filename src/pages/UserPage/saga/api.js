import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function fetchUserDetails({ payload }) {
  const mockData = require('./mock/mockUserDetails.json');

  return new Promise(resolve => setTimeout(() => resolve(mockData), 1000));
}

export function fetchWantToRead({ payload }) {
  const mockData = require('./mock/mockBookList.json');

  return new Promise(resolve => setTimeout(() => resolve(mockData), 1000));
}

export function fetchReading({ payload }) {
  const mockData = require('./mock/mockBookList.json');

  return new Promise(resolve => setTimeout(() => resolve(mockData), 1000));
}

export function fetchBooksInCommon({ payload }) {
  const mockData = require('./mock/mockBookInCommon.json');

  return new Promise(resolve => setTimeout(() => resolve(mockData), 1000));
}
