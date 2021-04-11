const express = require('express');
const app = express();  
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const cors = require("cors")
app.use(cors());
const port = process.env.PORT || 5000;

const bisecapi = require('./api/BisectionAPI')
const FalsePosAPI = require('./api/FalsePosAPI')
const OnePointAPI = require('./api/OnePointAPI')
const SecantAPI = require('./api/SecantAPI')
const NewtonRaphsonAPI = require('./api/NewtonRaphsonAPI')
app.use('/',bisecapi);
app.use('/',FalsePosAPI);
app.use('/',OnePointAPI);
app.use('/',SecantAPI);
app.use('/',NewtonRaphsonAPI);
app.listen(port, () => console.log("Backend server live on " + port));
  