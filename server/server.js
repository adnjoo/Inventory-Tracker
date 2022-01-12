// load modules
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 4001;
const controller = require('./controller');

const app = express();
app.use(cors());
app.use(express.json());

// test route
app.get('/', controller.testRoute);

// create
app.post('/api/addproduct', controller.addProduct);

// read
app.get('/api/getproducts', controller.getProducts);

// get product by id
app.post('/api/getproductbyid', controller.getProductById);

// server listening
app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
