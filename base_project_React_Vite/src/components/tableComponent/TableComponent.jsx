import Table from "react-bootstrap/Table";
import AverageCalculator from "../averageCalculator/AverageCalculator";


const TableComponent = ({ netIncomes }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Brand</th>
          <th>Net Income</th>
        </tr>
      </thead>
      <tbody>
        {netIncomes.map((component, index) => (
          <tr key={index}>
            <td>{component.brand}</td>
            <td>{component.income}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2"><AverageCalculator netIncomes={netIncomes}/></td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default TableComponent;
