// load modules
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 4001;
const controller = require('./controller');

const app = express();
app.use(cors()); // enable cors
app.use(express.json()); // recognize request objects as JSON

// test route
app.get('/', controller.testRoute);

// server listening
app.listen(port, () => {
  console.log(`serving on port ${port}`);
});
