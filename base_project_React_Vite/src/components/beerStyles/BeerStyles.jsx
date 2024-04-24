import { Badge, Button, ListGroup } from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";

const BeerStyle = ({ beers }) => {
  const style = [...new Set(beers.map((beer) => beer.beerStyle))];

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
        <ListGroup>
          {style.map((style, index) => (
            <ListGroup.Item action variant="secondary" key={index}>
              {style}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default BeerStyle;

BeerStyle.propTypes = {
  beers: PropTypes.array,
};
