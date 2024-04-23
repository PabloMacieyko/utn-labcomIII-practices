import "./App.css";
import AverageCalculator from "./components/averageCalculator/AverageCalculator";
import TableComponent from "./components/tableComponent/TableComponent";

function App() {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];

  return (
    <div>
      <TableComponent netIncomes={netIncomes} />
      <AverageCalculator netIncomes={netIncomes} />
    </div>
  );
}

export default App;
