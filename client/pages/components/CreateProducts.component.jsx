import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function CreateProducts() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [inventory, setInventory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('hi', name, price, inventory);
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="inventory">
        <Form.Label>Inventory</Form.Label>
        <Form.Control type="text" placeholder="Inventory" onChange={(e) => setInventory(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
