const AverageCalculator = ({ netIncomes }) => {
  const average = (
    netIncomes.reduce((accumulator, value) => accumulator + value.income, 0) /
    netIncomes.length
  ).toFixed(2);

  return <p>Average income: {average}</p>;
};

export default AverageCalculator;
