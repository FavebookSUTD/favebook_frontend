import api from '@apis/api';
import apiConfig from '@apis/apiConfig';

export function searchBooks({ payload }) {
  // TODO: Connect to real api
  if (payload) {
    // const bookList = [
    //   { id: 1, title: 'Book 1', imgURL: '', author: 'Lionell Loh' },
    //   { id: 2, title: 'Book 2', imgURL: '', author: 'Lionell Loh' },
    //   { id: 3, title: 'Book 3', imgURL: '', author: 'Lionell Loh' },
    //   { id: 4, title: 'Book 4', imgURL: '', author: 'Lionell Loh' },
    //   { id: 5, title: 'Book 5', imgURL: '', author: 'Lionell Loh' },
    // ];

    // return bookList;
    return api.get({
      url: apiConfig.books.bookList,
    });
  }
  return [];
}
