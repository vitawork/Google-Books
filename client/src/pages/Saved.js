import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import CardList from "../components/CardList";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        this.setState({ books: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <CardList books={this.state.books} deleteBook={this.deleteBook} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
