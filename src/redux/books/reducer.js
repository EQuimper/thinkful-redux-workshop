import * as actionTypes from '../actionTypes'

const initialState = {
  isFetching: false,
  error: null,
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BOOKS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false
      }
    case actionTypes.FETCH_BOOKS_ERROR:
      return {
        ...state,
        error: action.error,
        isFetching: false
      }
    case actionTypes.CREATE_BOOKS_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    default:
      return state;
  }
};