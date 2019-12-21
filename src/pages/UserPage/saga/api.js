import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function fetchUserDetails({ payload }) {
  const { username } = payload;
  return api
    .get({
      url: apiConfig.userDetails.replace('{username}', username),
    })
    .then(response => {
      return response;
    });
}

export function fetchFavourite({ payload }) {
  const { username } = payload;
  return api
    .get({
      url: apiConfig.userDetails.replace('{username}', username),
    })
    .then(response => {
      return response;
    });
}

export function fetchBooksReviewed({ payload }) {
  const { username } = payload;
  return api
    .get({
      url: apiConfig.userDetails.replace('{username}', username),
    })
    .then(response => {
      return response;
    });
}
