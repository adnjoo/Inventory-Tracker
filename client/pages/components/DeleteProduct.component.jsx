import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export function DeleteProduct({ productId, getProducts }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    axios.delete(
      'http://localhost:4001/api/deleteproduct',
      { data: { id: productId } },
    )
      .then(() => {
        handleClose();
        getProducts();
      });
  };
  return (
    <>
      <Button variant="warning" onClick={handleShow}>Delete</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title />
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete product
          {' '}
          {productId}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClick}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}
