import uuid from 'uuid/v4';

DONT REPEAT YOURSELF

class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _fetch(path, method, body) {
    return fetch(`${this._baseUrl}/${path}`, {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json());
  }

  _getBooks() {
    return this._fetch('books', 'GET');
  }

  _createBook(book) {
    const id = uuid();
    return this._fetch('books', 'POST', { id, ...book });
  }
}

const api = new Api('http://localhost:8000');


