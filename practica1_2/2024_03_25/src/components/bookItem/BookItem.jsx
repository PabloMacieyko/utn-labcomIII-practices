import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import "./BookItem.css";


const BookItem = ({ title, author, pageCount, rating, imageUrl }) => {
  return (
    <Card className="mx-1" style={{ width: "22rem" }}>
      <Card.Img
        height={400}
        variant="top"
        src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
      />
      <Card.Body>
        <Card.Title> Titulo {title}</Card.Title>
        <Card.Subtitle> Author {author}</Card.Subtitle>
        <div>estrellas {rating?.length} </div>
        <p>{pageCount} páginas</p>
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
