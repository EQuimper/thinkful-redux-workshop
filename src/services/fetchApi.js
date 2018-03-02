import { BASE_URL } from '../constants';

export const fetchApi = ({ path, method, body }) => {
  return fetch(`${BASE_URL}/${path}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
};
