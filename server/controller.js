const pool = require('./db');

const testRoute = (req, res) => {
  res.status(200).send('Test route working!');
};

// get products
const getProducts = (req, res) => {
  try {
    pool
      .query('SELECT * FROM products')
      .then((results) => {
        res.status(200).send(results.rows);
      });
  } catch (e) {
    console.log('error', e);
  }
};

module.exports = {
  testRoute,
  getProducts,
};
