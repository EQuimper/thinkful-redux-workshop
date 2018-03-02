import uuid from 'uuid/v4'

import * as actionTypes from '../actionTypes';

export const fetchBooksRequest = () => ({
  type: actionTypes.FETCH_BOOKS_REQUEST,
});

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

export const createBooksRequest = () => ({
  type: actionTypes.CREATE_BOOKS_REQUEST,
});

export const createBooksSuccess = payload => ({
  type: actionTypes.CREATE_BOOKS_SUCCESS,
  payload,
});

export const createBooksError = error => ({
  type: actionTypes.CREATE_BOOKS_ERROR,
  error,
});

export const createBooksApiCall = ({ title, coverUrl }) => ({
  type: actionTypes.CREATE_BOOKS_API_CALL,
  meta: {
    info: {
      path: 'books',
      method: 'POST',
      body: {
        title,
        coverUrl,
        id: uuid()
      },
    },
    onRequest: createBooksRequest,
    onSuccess: createBooksSuccess,
    onError: createBooksError,
  },
});
