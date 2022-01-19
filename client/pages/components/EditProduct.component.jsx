import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    setId(props.data.id);
    setName(props.data.name);
    setPrice(props.data.price);
    setQuantity(props.data.quantity);
  }, []);

  const handleSubmit = () => {
    axios.put('http://localhost:4001/api/editproduct', {
      id,
      name,
      price,
      quantity,
    }).then(() => {
      props.getProducts();
      props.setModalShow(false);
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit product
          {' '}
          {id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="w-50"
                type="text"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                className="w-50"
                type="number"
                step="0.01"
                min="0.01"
                defaultValue={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                className="w-50"
                type="number"
                step="1"
                min="1"
                defaultValue={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export function EditProduct({ productData, getProducts }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="info" onClick={() => setModalShow(true)}>Edit</Button>

      <MyVerticallyCenteredModal
        data={productData}
        show={modalShow}
        setModalShow={setModalShow}
        onHide={() => setModalShow(false)}
        getProducts={getProducts}
      />
    </>
  );
}
