import { combineReducers } from 'redux';

import { BooksReducer as books } from './books';

export default combineReducers({
  books,
});
