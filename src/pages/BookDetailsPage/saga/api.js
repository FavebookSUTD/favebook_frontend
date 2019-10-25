import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function fetchBookDetails({ payload }) {
  const mockData = require('./mock/mockBookDetails.json');

  return new Promise(resolve => setTimeout(() => resolve(mockData), 2000));
}

export function fetchBookReviews({ payload }) {
  const mockData = require('./mock/mockReviewList.json');

  return new Promise(resolve => setTimeout(() => resolve(mockData), 2000));
}
