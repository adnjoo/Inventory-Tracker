const copyTo = require('pg-copy-streams').to;
const fs = require('fs');
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

// Export table
const downloadProducts = (req, res) => {
  let data = '';
  pool.connect((pgErr, client) => {
    if (pgErr) {
      // handle error
      return;
    }
    const q = 'COPY products TO STDOUT With CSV HEADER';
    const stream = client.query(copyTo(q));
    stream.on('data', (chunk) => {
      data += chunk;
    });

    stream.on('end', () => {
      console.log(data);
      fs.writeFile('../client/public/products.csv', data, (err) => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
      res.status(200).send('file created');
      client.end();
    });
  });
};

// Insert data
const reset = (req, res) => {
  try {
    pool.query("DELETE from products; ALTER TABLE products DROP id; ALTER TABLE products ADD id SERIAL PRIMARY KEY; INSERT INTO products (name, price, quantity, tags) VALUES ('Mountain Bike', 199.99, 25, 'sports-equipment'), ('Surfboard', 299.99, 30, 'sports-equipment'), ('50L Backpack', 59.99, 20, 'sports-equipment'),('Yeti Tumbler', 29.99, 100, 'sports-accessories'),('Yeti Cooler', 249.99, 30, 'sports-accessories'),('Airpods', 179.00, 100, 'consumer-electronics'),('Macbook Pro', 1299.00, 50, 'consumer-electronics'),('iPhone SE', 399.00, 300, 'consumer-electronics'),('iPhone 13 Pro', 999.00, 20, 'consumer-electronics');").then(() => {
      res.status(200).send('success');
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
  downloadProducts,
  reset,
};
