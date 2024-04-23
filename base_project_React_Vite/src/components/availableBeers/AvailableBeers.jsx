import BeerItem from "../beerItem/BeerItem";
import PropTypes from "prop-types";
import { Button, ListGroup } from 'react-bootstrap';
import { useState } from "react";

const AvailableBeers = ({ beers }) => {
  const avaiableBeers = beers.filter((beer) => beer.available);

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
          {avaiableBeers.map((beer) => (
            <BeerItem
              key={beer.id}
              name={beer.beerName}
              style={beer.beerStyle}
              price={beer.price}
            />
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default AvailableBeers;

AvailableBeers.propTypes = {
  beers: PropTypes.array,
};
