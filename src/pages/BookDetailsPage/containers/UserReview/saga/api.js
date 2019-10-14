import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function fetchUserRating() {
  // TODO: Connect to real api
  const data = {
    rating: 1.5,
  };

  return Promise.resolve(data);
}

export function updateUserRating({ payload: { id, rating } }) {
  // TODO: Connect to real api
  const data = {
    rating,
  };

  return Promise.resolve(data);
}

export function submitUserReview({ payload: { id, review } }) {
  // TODO: Connect to real api
  const data = {
    id: 123,
    bookId: id,
    review,
    author: 'John Doe',
  };

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}
