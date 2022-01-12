import React from 'react';
import { Table } from 'react-bootstrap';
import { EditProduct } from './EditProduct.component';

export default function MyTable({ products }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
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
              {item.quantity}
            </td>
            <td>
              <EditProduct
                inputId={item.id}
              />
              | delete
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}