require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config')

//server
const app = express();

//cors
app.use(cors());

//dbconnection
dbConnection();

//getting and parsing the body
app.use(express.json());

//setting port
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

