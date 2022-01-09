// load modules
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 4001; // use either host env port or local port
const controller = require("./controller");

const app = express(); // let app = new express
app.use(cors()); //enable cors
app.use(express.json()); // recognize request objects as JSON

//test route
app.get('/', controller.testRoute)