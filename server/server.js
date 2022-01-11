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

app.get('/api/getproducts', controller.getProducts);

// server listening
app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
