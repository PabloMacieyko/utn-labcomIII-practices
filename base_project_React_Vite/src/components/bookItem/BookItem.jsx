import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import "./BookItem.css";
import { useState } from "react";

const BookItem = ({ title, author, pageCount, rating, imageUrl }) => {
  const [newTitle, setNewTitle] = useState(title);

  const clickHandler = () => {
    console.log(newTitle)
    setNewTitle("Updated!");
  };
  return (
    <Card className="mx-1" style={{ width: "22rem" }}>
      <Card.Img
        height={400}
        variant="top"
        src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
      />
      <Card.Body>
        <Card.Title>{newTitle}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <div>{rating?.length} stars</div>
        <p>{pageCount} pages</p>
        <Button className="btn btn-warning" onClick={clickHandler}>
          {" "}
          Change title{" "}
        </Button>
      </Card.Body>
    </Card>
  );
};

BookItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pageCount: PropTypes.number,
  rating: PropTypes.array,
};

export default BookItem;
