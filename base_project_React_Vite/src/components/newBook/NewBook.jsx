import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const NewBook = ({ onBookDataSaved }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredRating, setEnteredRating] = useState("");
  const [enteredPageCount, setEnteredPageCount] = useState("");
  const [enteredImageUrl, setEnteredImageUrl] = useState("");

  const [showForm, setShowForm] = useState(false);

  const changeTitleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const changeAuthorHandler = (e) => {
    setEnteredAuthor(e.target.value);
  };

  const changeRatingHandler = (e) => {
    setEnteredRating(e.target.value);
  };

  const changePageCountHandler = (e) => {
    setEnteredPageCount(e.target.value);
  };

  const changeImageUrlHandler = (e) => {
    setEnteredImageUrl(e.target.value);
  };

  const submitBookHandler = (e) => {
    e.preventDefault();
    const bookData = {
      bookTitle: enteredTitle,
      bookAuthor: enteredAuthor,
      bookRating:
        enteredRating !== ""
          ? Array(parseInt(enteredRating, 10)).fill("*")
          : Array(0),
      pageCount: parseInt(enteredPageCount, 10),
      imageUrl: enteredImageUrl,
    };

    onBookDataSaved(bookData);
    setEnteredAuthor("");
    setEnteredTitle("");
    setEnteredRating("");
    setEnteredPageCount("");
    setEnteredImageUrl("");
  };

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Button onClick={handleClick}>{showForm ? "Hide" : "Add Book"}</Button>
      {showForm && (
        <Card className="m-4 w-50" bg="success">
          <Card.Body>
            <Form className="text-white" onSubmit={submitBookHandler}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="bookTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter text..."
                      onChange={changeTitleHandler}
                      value={enteredTitle}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="bookAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter author..."
                      onChange={changeAuthorHandler}
                      value={enteredAuthor}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="bookRating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Number of stars..."
                      max={5}
                      min={0}
                      onChange={changeRatingHandler}
                      value={enteredRating}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="bookPageCount">
                    <Form.Label>Number of pages</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Number of pages..."
                      min={1}
                      onChange={changePageCountHandler}
                      value={enteredPageCount}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="justify-content-between">
                <Form.Group className="mb-3" controlId="bookImageUrl">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Image URL..."
                    onChange={changeImageUrlHandler}
                    value={enteredImageUrl}
                  />
                </Form.Group>
              </Row>
              <Row className="justify-content-end">
                <Col md={3} className="d-flex justify-content-end">
                  <Button variant="primary" type="submit">
                    Add reading
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

NewBook.propTypes = {
  onBookDataSaved: PropTypes.func.isRequired,
};

export default NewBook;