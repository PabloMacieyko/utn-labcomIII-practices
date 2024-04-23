
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import PropTypes from "prop-types";

const BeerItem = ({ name, style, price }) => {

  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Beer: {name}</div>
          Style: {style}
        </div>
        <div className="ms-5">
            <Badge pill bg="dark">Price: ${price * 1000}</Badge>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default BeerItem;

BeerItem.propTypes = {
  name: PropTypes.string,
  style: PropTypes.string,
  price: PropTypes.number,
};
