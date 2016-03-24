import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// connection between react and redux
function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the
// BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called the result should be passed to
  // all of our reducers
  // this.props.selectBook will call the action creator
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container
// It needs to know about this new dispatch method, selectBook. Make it
// available as a prop 
// Takes a component and a function to create a container that is
// aware of the state that is provided by redux
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
