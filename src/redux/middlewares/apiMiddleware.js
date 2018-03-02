import { fetchApi } from '../../services/fetchApi';

export const apiMiddleware = ({ dispatch, getState }) => next => action => {
  if (!action.type.includes('API_CALL')) {
    return next(action);
  }

  dispatch(action.meta.onRequest());

  fetchApi(action.meta.info)
    .then(res => dispatch(action.meta.onSuccess(res)))
    .catch(err => dispatch(action.meta.onError(err)));
};
