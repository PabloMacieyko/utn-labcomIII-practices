import React from "react";
import PropTypes from "prop-types";
import BookItem from "../bookItem/BookItem";
import "./Books.css";

const Books = ({ books }) => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {books.map((book, index) => (
        <BookItem
          key={index}
          title={book.bookTitle}
          author={book.bookAuthor}
          pageCount={book.pageCount}
          rating={book.bookRating}
          imageUrl={book.imageUrl}
        />
      ))}
    </div>
  );
};

Books.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pageCount: PropTypes.number,
  rating: PropTypes.array,
};

export default Books;
