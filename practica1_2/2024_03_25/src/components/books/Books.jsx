import React from "react";
import PropTypes from "prop-types";
import BookItem from "../bookItem/BookItem";



const Books = ({ books }) => {
    return (
        <div className="d-flex justify-content-center flex-wrap">
            {books.map((book, index) => (
                <BookItem
                    key={index}
                    title={book.title}
                    author={book.author}
                    pageCount={book.pageCount}
                    rating={book.rating}
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