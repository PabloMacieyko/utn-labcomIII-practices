import PropTypes from "prop-types";
import { Badge, Button, ListGroup } from "react-bootstrap";
import { useState } from "react";

const CountRedIpa = ({ beers }) => {
  const IpaBeers = beers.filter((beer) => beer.beerStyle == "IPA").length;
  const RedBeers = beers.filter((beer) => beer.beerStyle == "Red").length;

  const [showList, setShowList] = useState(false);

  const handleClick = () => {
    setShowList(!showList);
  };

  return (
    <>
      <Button variant="outline-dark" onClick={handleClick}>
        {showList ? "Hide" : "Show List"}
      </Button>
      {showList && (
        <ListGroup as="ol" numbered>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            action
            variant="success"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">IPA</div>
            </div>
            <Badge bg="success" pill>
              {IpaBeers}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            action
            variant="danger"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Red</div>
            </div>
            <Badge bg="danger" pill>
              {RedBeers}
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      )}
    </>
  );
};

export default CountRedIpa;

CountRedIpa.proTypes = {
  beers: PropTypes.array,
};
