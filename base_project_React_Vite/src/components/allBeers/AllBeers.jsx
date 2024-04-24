import BeerItem from "../beerItem/BeerItem";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const AllBeers = ({ beers }) => {
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
          {beers.map((beer) => (
            <BeerItem
              key={beer.id}
              name={beer.beerName}
              style={beer.beerStyle}
              price={beer.price}
            ></BeerItem>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default AllBeers;
