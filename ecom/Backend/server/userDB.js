require("dotenv").config();
const connectDB = require("./db/connect");

const User = require("./models/users");

const usersJson = require("./users.json");

const start = async() => {
try {
    await connectDB(process.env.MONGODB_URL);
    await  User.create(usersJson);
    console.log("Hiiii Guyss");
} 

catch (error) 
{
    console.log(error);
}
}

start();


