import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

export default function AddProduct({ getProducts }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4001/api/addproduct', {
      name,
      price,
      quantity,
    }).then(() => {
      getProducts();
      handleClose();
    });
  };

  return (
    <>
      <Button style={{ float: 'right' }} onClick={handleShow}>Add a product</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <h3>Add a product</h3>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control className="w-50" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control className="w-50" type="number" step="0.01" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control className="w-50" type="number" step="1" placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)} />
            </Form.Group>
            <Button style={{ float: 'right' }} variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
