const express = require('express');
const morgan = require("morgan");

const app = new express();


// connecting mongodb
require("./db/db")();

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use(require("./routes"));
app.use(require("./routes/admin"));

app.listen(3000, console.log('listening on port 3000'));