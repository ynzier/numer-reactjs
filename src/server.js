const express = require('express');
const app = express();  
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const cors = require("cors")
app.use(cors());
const port = process.env.PORT || 5000;



app.get('/',(req, res) => {

});
const bisecapi = require('./api/BisectionAPI')

app.use('/',bisecapi);


app.listen(port, () => console.log("Backend server live on " + port));
  