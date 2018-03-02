import React, { Component } from 'react';
import { connect } from 'react-redux';

import './BookList.css';
import { Book } from '../';
import {
  getBooks,
  getBooksLoading,
  fetchBooksApiCall,
  createBooksApiCall,
} from '../../../redux';

// CONTROLLED COMPONENT

class BookList extends Component {
  state = {
    title: '',
    coverUrl: '',
    errors: {
      title: null,
    },
  };

  componentDidMount() {
    this._fetchBooks();
  }

  _fetchBooks() {
    this.props.dispatch(fetchBooksApiCall());
  }

  _onChange = e => {
    if (e.target.name === 'title' && e.target.value.length < 6) {
      this.setState({
        [e.target.name]: e.target.value,
        errors: {
          ...this.state.errors,
          title: 'Must be longer',
        },
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
        errors: {
          ...this.state.errors,
          title: null,
        },
      });
    }
  };

  _onSubmit = e => {
    e.preventDefault();

    this.props.dispatch(createBooksApiCall(this.state));
    this.setState({
      title: '',
      coverUrl: '',
    });
  };

  render() {
    if (this.props.isLoading) {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    }
    return (
      <div className="BookList">
        <div>
          <form onSubmit={this._onSubmit}>
            <div>
              <input
                onChange={this._onChange}
                name="title"
                type="text"
                placeholder="Title..."
                value={this.state.title}
              />
              {this.state.errors.title && (
                <p style={{ color: 'red' }}>{this.state.errors.title}</p>
              )}
            </div>
            <input
              onChange={this._onChange}
              name="coverUrl"
              type="text"
              placeholder="Cover url..."
              value={this.state.coverUrl}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <hr />
        <h3>List of Books</h3>
        <div className="BookList-container">
          {this.props.books.map(book => <Book {...book} key={book.id} />)}
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

// class Component {
//   constructor(props, state) {
//     this.props = props;
//     this.state = state;
//   }

//   componentDidMount() {

//   }

//   setState(newState) {
//     this.state = Object.assign({}, this.state, newState)
//   }

//   render() {

//   }
// }

// class Human {
//   constructor(name) {
//     this.name = name
//   }

//   getName() {
//     console.log(`Your name is ${this.name}`)
//   }
// }

// class Person extends Human {
//   constructor(name, country) {
//     super(name);
//     this.country = country
//   }

//   getCountry() {
//     console.log(`Hello from ${this.country}`)
//   }
// }
