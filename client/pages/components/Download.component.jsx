import React from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

export default function Download() {
  const exportCSV = () => {
    axios.get('http://localhost:4001/api/download').then(() => {
    });
    setTimeout(() => {
      saveAs(
        './products.csv',
      );
    }, 1000);
  };
  return (
    <button type="button" style={{ float: 'right' }} onClick={exportCSV}>Export table as .csv</button>
  );
}
