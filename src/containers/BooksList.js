import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BooksList extends Component {
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.props.books.map(book => {
          return (
            <li
              key={book.title}
              className="list-group-item"
              onClick={() => this.props.selectBook(book)}
            >
              {book.title}
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  // Whatever is returned will show up as props
  // inside of BooksList
  books: state.books
});

// Anything returned from this function will
// end up as prop on the BookList container
// just like mapStateToProps function does
const mapDispatchToProps = dispatch => {
  // Whenever selectBook is called the result
  // should be passed (by dispatch function) to all of our reducers.
  // That's what bindActionCreators do.
  return bindActionCreators({ selectBook }, dispatch);
};

// Promote BooksList from a component to a
// container - it needs to know about this
// new dispatch method, selectBook. Make it
// available as a prop.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksList);
