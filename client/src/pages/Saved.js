import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import CardList from "../components/CardList";
import "../assets/style/Search.css";

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
      <div>
        <Container>
          <Row>
            <Col size="bookscol">
              <CardList books={this.state.books} deleteBook={this.deleteBook} />
            </Col>
          </Row>
        </Container>
        <div
          className={`center ${
            this.state.books.length > 0 ? "foot" : "footfixed"
          }`}
        >
          <p>© 2019 Copyright Text</p>
        </div>
      </div>
    );
  }
}

export default Saved;
