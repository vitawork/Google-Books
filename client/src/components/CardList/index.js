import React from "react";
import "./style.css";

function CardList(props) {
  return (
    <ul>
      {props.books.map(book => (
        <li key={book._id}>
          <div className="col s12 m12 margtop">
            <div className="card horizontal">
              <div className="fixed-action-btn horizontal">
                <a
                  className="btn-floating btn-large black-button"
                  onClick={
                    props.add
                      ? () => props.addBook(book._id)
                      : () => props.deleteBook(book._id)
                  }
                >
                  <i className="large material-icons">
                    {props.add ? "add" : "delete"}
                  </i>
                </a>
              </div>
              <div className="card-stacked">
                <div className="card-action center">
                  <h4>
                    <i>
                      <a href={book.link}>{book.title}</a>
                    </i>
                  </h4>
                  <p>Written By{book.authors.map(aut => ` ${aut}.`)}</p>
                </div>
                <div className="card-action">
                  <a className="floatl" href={book.link}>
                    <img alt={book.title} src={book.image} />
                  </a>
                  <p>{book.description}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CardList;
