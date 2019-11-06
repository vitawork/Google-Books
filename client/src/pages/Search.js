import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "../assets/style/Search.css";
import GoogleAPI from "../utils/GoogleAPI";
import API from "../utils/API";
import CardList from "../components/CardList";

class Search extends Component {
  state = {
    books: [],
    search: ""
  };

  deletingMessage = event => {
    if (this.state.search === "No Books Found.") {
      this.setState({ search: "" });
    }
    // const { name, value } = event.target;
    // if (name === "search") {
    //   this.setState({ search: "" });
    //   console.log("+++++++++++blur ");////////
    // }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.getBooks()
      .then(res => {
        const dbbooks = res.data;

        GoogleAPI.getGoogleBooks({ text: this.state.search })
          .then(res => {
            const books = [];
            let search = "";
            if (res.data.length !== 0) {
              res.data.map(book => {
                if (
                  book.volumeInfo.title &&
                  book.volumeInfo.description &&
                  book.volumeInfo.imageLinks &&
                  book.volumeInfo.authors &&
                  book.volumeInfo.infoLink
                ) {
                  var und = dbbooks.find(
                    b => b.link === book.volumeInfo.infoLink
                  );
                  if (!und) {
                    books.push({
                      title: book.volumeInfo.title,
                      authors: book.volumeInfo.authors,
                      description: book.volumeInfo.description,
                      image: book.volumeInfo.imageLinks.smallThumbnail,
                      link: book.volumeInfo.infoLink,
                      _id: book.volumeInfo.industryIdentifiers[0].identifier
                    });
                  }
                }
              });
            } else {
              search = "No Books Found.";
            }

            this.setState({ books, search });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addBook = id => {
    this.state.books.map(book => {
      if (book._id === id) {
        API.saveBook({
          title: book.title,
          authors: book.authors,
          description: book.description,
          image: book.image,
          link: book.link
        })
          .then(res => {
            const books = this.state.books.filter(book => book._id !== id);
            this.setState({ books });
          })
          .catch(err => console.log(err));
      }
    });
  };

  render() {
    return (
      <div>
        <Container empty={this.state.books.length > 0 ? false : true}>
          <Row center>
            <Col size="m12">
              <h1 className="center">Google Books Search</h1>
            </Col>
          </Row>
          <Row>
            <Col size="offset-s1 s10 offset-m3 m6">
              <div className="search-wrapper center">
                <form
                  className="center"
                  onSubmit={e => this.handleFormSubmit(e)}
                  onBlur={e => this.deletingMessage(e)}
                >
                  <input
                    id="search"
                    name="search"
                    value={
                      this.state.search === "No Books Found."
                        ? ""
                        : this.state.search
                    }
                    type="search"
                    placeholder={
                      this.state.search === "No Books Found." ? "" : "Search"
                    }
                    required
                    onChange={this.handleInputChange}
                  />
                  <button type="submit" id="searchicon">
                    <i className="material-icons">search</i>
                  </button>
                  <div className="search-results"></div>
                </form>
              </div>
            </Col>
          </Row>
          <Row>
            <Col size="offset-s1 s10 offset-m3 m6">
              <div className="search-wrapper center">
                <h5>
                  {this.state.search === "No Books Found."
                    ? this.state.search
                    : " "}
                </h5>
              </div>
            </Col>
          </Row>
          <Row>
            <CardList books={this.state.books} add addBook={this.addBook} />
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

export default Search;
