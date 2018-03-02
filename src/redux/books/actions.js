import * as actionTypes from '../actionTypes';

export const fetchBooksRequest = () => ({
  type: actionTypes.FETCH_BOOKS_REQUEST
})

export const fetchBooksSuccess = payload => ({
  type: actionTypes.FETCH_BOOKS_SUCCESS,
  payload,
});

export const fetchBooksError = error => ({
  type: actionTypes.FETCH_BOOKS_ERROR,
  error,
});

export const fetchBooksApiCall = () => ({
  type: actionTypes.FETCH_BOOKS_API_CALL,
  meta: {
    info: {
      path: 'books',
      method: 'GET',
    },
    onRequest: fetchBooksRequest,
    onSuccess: fetchBooksSuccess,
    onError: fetchBooksError,
  },
});
