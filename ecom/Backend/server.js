require("dotenv").config();

const express = require("express");
const app = express();
const connectDb = require("./utils/db")
const cors = require('cors');




const corsOptions ={
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,

}

app.use(cors(corsOptions));

app.use(express.json());

//requiring the router:
const router = require('./route/auth-router');
app.use("/api/auth", router);

//middleware:


//on the console it will show this:
const PORT = 7000;


connectDb().then(() => {
    app.listen(PORT, () => 
        {
           console.log(`Server is running on the port : ${PORT}`);
        
        });

});