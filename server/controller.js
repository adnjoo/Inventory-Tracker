const pool = require('./db');

// Test route
const testRoute = (req, res) => {
  res.status(200).send('Test route working!');
};

// Get products
const getProducts = (req, res) => {
  try {
    pool
      .query('SELECT * FROM products;')
      .then((results) => {
        res.status(200).send(results.rows);
      });
  } catch (e) {
    console.log('error', e);
  }
};

// Get product by id
const getProductById = (req, res) => {
  try {
    pool
      .query('SELECT * FROM products WHERE id = $1;', [req.body.id])
      .then((results) => {
        res.status(200).send(results);
      });
  } catch (e) {
    console.log('error', e);
  }
};

// Add a new product
const addProduct = (req, res) => {
  try {
    pool.query('INSERT INTO products (name, price, quantity) VALUES ($1, $2, $3);', [
      req.body.name,
      req.body.price,
      req.body.quantity,
    ]).then((results) => {
      // console.log(`product added: ${req.body.name}`);
      res.status(200).send(results);
    });
  } catch (e) {
    console.log('error', e);
  }
};

// Edit product

module.exports = {
  testRoute,
  getProducts,
  getProductById,
  addProduct,
};
