import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function fetchNextPage({ payload: { searchResults } }) {
  const newBookList = { ...searchResults };

  return newBookList;
}
