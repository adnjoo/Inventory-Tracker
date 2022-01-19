import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default function Reset({ getProducts }) {
  const resetData = () => {
    if (window.confirm('Are you sure you want to reset data?')) {
      axios.get('http://localhost:4001/api/resetdata').then(() => {
        getProducts();
      });
    }
  };
  return (
    <Button variant="danger" onClick={resetData} style={{ float: 'right' }}>
      Reset data
    </Button>
  );
}
