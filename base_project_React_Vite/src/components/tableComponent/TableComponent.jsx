import Table from "react-bootstrap/Table";

const TableComponent = ({ netIncomes }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Brand</th>
          <th>Gross Income</th>
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
    </Table>
  );
};

export default TableComponent;
