import React, { Component } from "react";

import SingleCard from "./SingleCard";

class AuthorList extends Component {
  render() {
    let authors = this.props.authors;
    const authorCards = authors.map(author => (
      <SingleCard author={author} key={author.first_name} />
    ));
    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}
export default AuthorList;
