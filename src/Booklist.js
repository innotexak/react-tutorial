import React, { Component } from 'react';
import Book from './Book';
import bookData from './bookData';

export default class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: bookData,
    };
  }
  handleDelete = (id) => {
    const sortedBooks = this.state.books.filter((item) => item.id !== id);
    this.setState({ books: sortedBooks });
  };

  render() {
    return (
      <section>
        {this.state.books.map((item, index) => (
          <Book key={item.id} info={item} handleDelete={this.handleDelete} />
        ))}
      </section>
    );
  }
}
