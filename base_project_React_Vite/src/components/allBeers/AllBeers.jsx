import BeerItem from "../beerItem/BeerItem";

const AllBeers = ({ beers }) => {
  return (
    <>
      {beers.map((beer) => (
        <BeerItem
          key={beer.id}
          name={beer.beerName}
          style={beer.beerStyle}
          price={beer.price}
        ></BeerItem>
      ))}
    </>
  );
};

export default AllBeers;
