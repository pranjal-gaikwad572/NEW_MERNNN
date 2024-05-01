const express = require("express");
const app = express();
const cors = require('cors');
const bcrypt = require("bcrypt");

const dotenv = require("dotenv");

dotenv.config({path:"./config.env"});

app.use(cors());
app.use(express.json())


app.use(require('./routes/route'));

//getting the port number from config.env:
const port = process.env.PORT;

//requiring connection.js:
require("./database/connection");

app.listen(port, () =>
{
    console.log(`server is listening to the port http://localhost:${port}`);
})
