import React, { Component } from 'react';
import { connect } from 'react-redux';

import './BookList.css';
import { Book } from '../';
import { fetchBooksApiCall, getBooks, getBooksLoading } from '../../../redux';

class BookList extends Component {
  componentDidMount() {
    this._fetchBooks();
  }

  _fetchBooks() {
    this.props.dispatch(fetchBooksApiCall());
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      )
    }
    return (
      <div className="BookList">
        <h3>List of Books</h3>
        <div className="BookList-container">
          {this.props.books.map(book => (
            <Book {...book} key={book.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getBooksLoading(state),
  books: getBooks(state),
});

export default connect(mapStateToProps)(BookList);
