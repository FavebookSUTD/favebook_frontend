import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function fetchNextPage({ payload: { searchResults, pageNum, pageSize } }) {
  // TODO: Connect to real api
  const newBookList = { ...searchResults, pageNum };

  return newBookList;
  // const bookList = require('./mock/mockBookList.json');
  // const newBookList = { ...bookList.data, pageNum };
  // return new Promise(resolve => {
  //   setTimeout(() => resolve(newBookList), 2000);
  // });
}
