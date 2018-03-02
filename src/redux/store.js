import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import { apiMiddleware } from './middlewares/apiMiddleware'

const middlewares = [apiMiddleware, thunk, createLogger()];

export default createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);
