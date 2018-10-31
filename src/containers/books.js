import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/books';

class BookList extends Component {
  renderList() {
    return this.props.booksReducer.books.map(book => (
      <li
        key={book.title}
        className="list-group-item"
        onClick={() => this.props.selectBook(book)}
      >
        {book.title}
      </li>
    ));
  }

  getActiveBook() {
    const activeBook = this.props.booksReducer.activeBook;
    console.log(this.props.booksReducer);
    if (!activeBook) {
      return <div>No active book yet</div>;
    }
    return <div>selected book : {activeBook.title}</div>;
  }

  render() {
    return (
      <div>
        <ul className="list-group col-sm-4">{this.renderList()}</ul>
        <hr />
        {this.getActiveBook()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    booksReducer: state.books
  };
}

export default connect(
  mapStateToProps,
  { selectBook }
)(BookList);
