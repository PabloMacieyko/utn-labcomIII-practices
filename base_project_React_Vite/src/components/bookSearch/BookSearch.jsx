import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const BookSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState("");

  const clickHandler = () => {
    setShowSearch(!showSearch);
  };

  const searchHandler = () => {
    onSearch(searchTerm);
  };

  return (
    <>
      <Button onClick={clickHandler}>{showSearch ? "Hide" : "Show"}</Button>
      {showSearch && (
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <Form>
              <Form.Group controlId="formBasicSearch">
                <Form.Control
                  type="text"
                  placeholder="Search book by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={searchHandler}>
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      )}
      ;
    </>
  );
};

BookSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default BookSearch;
