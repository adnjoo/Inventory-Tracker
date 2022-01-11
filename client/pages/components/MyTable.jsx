import React from 'react';
import { Table } from 'react-bootstrap';

export default function MyTable({ products }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Inventory</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id}>
            <td>
              {item.id}
            </td>
            <td>
              {item.name}
            </td>
            <td>
              {item.price}
            </td>
            <td>
              {item.inventory}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
