import React, { Component } from 'react';

import './App.css';
import { BookList } from './modules'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to BookStore</h1>
        </header>
        <BookList />
      </div>
    );
  }
}

export default App;
