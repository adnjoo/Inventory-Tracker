// Load modules
const express = require('express');
const cors = require('cors');

// const port = process.env.PORT || 4001;
const controller = require('./controller');

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/', controller.testRoute);

// Create
app.post('/api/addproduct', controller.addProduct);

// Read
app.get('/api/getproducts', controller.getProducts);

// Get product by id
app.post('/api/getproductbyid', controller.getProductById);

// Edit product
app.put('/api/editproduct', controller.editProduct);

// Delete product
app.delete('/api/deleteproduct', controller.deleteProduct);

// Export table
app.get('/api/download', controller.downloadProducts);

// Delete and Insert data
app.get('/api/resetdata', controller.reset);

// Server listening
// app.listen(port, () => {
//   console.log(`Serving on port ${port}`);
// });

module.exports = app;
