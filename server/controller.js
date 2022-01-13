const pool = require('./db');

// Test route
const testRoute = (req, res) => {
  res.status(200).send('Test route working!');
};

// Get products
const getProducts = (req, res) => {
  try {
    pool
      .query('SELECT * FROM products ORDER BY id ASC;')
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
    console.log(req);
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
      res.status(200).send(results);
    });
  } catch (e) {
    console.log('error', e);
  }
};

// Edit product
const editProduct = (req, res) => {
  try {
    pool.query('UPDATE products SET name = $2, price = $3, quantity = $4 WHERE id = $1;', [
      req.body.id,
      req.body.name,
      req.body.price,
      req.body.quantity,
    ]).then((results) => {
      res.status(200).send(results);
    });
  } catch (e) {
    console.log('error', e);
  }
};

// Delete a product

const deleteProduct = (req, res) => {
  try {
    pool.query('DELETE FROM products WHERE id = $1;', [req.body.id])
      .then((results) => {
        console.log(req.body.id);
        res.status(200).send(results);
      });
  } catch (e) {
    console.log('error', e);
  }
};

module.exports = {
  testRoute,
  getProducts,
  getProductById,
  addProduct,
  editProduct,
  deleteProduct,
};
