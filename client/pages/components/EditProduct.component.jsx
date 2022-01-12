import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    setName(props?.data.name);
    setPrice(props?.data.price);
    setQuantity(props?.data.quantity);
  }, []);

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
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>
          Product Id:&nbsp;
          {props?.data.id}
        </h3>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control className="w-50" type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control className="w-50" type="number" step="0.01" defaultValue={price} onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control className="w-50" type="number" step="1" defaultValue={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function EditProduct({ inputId }) {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const getProductById = (input) => {
    axios.post('http://localhost:4001/api/getproductbyid', {
      id: input,
    }).then((res) => {
      setData(res.data.rows[0]);
    });
  };

  useEffect(() => {
    getProductById(inputId);
  }, []);

  return (
    <>
      <Button variant="warning" onClick={() => setModalShow(true)}>edit</Button>

      <MyVerticallyCenteredModal
        data={data}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
