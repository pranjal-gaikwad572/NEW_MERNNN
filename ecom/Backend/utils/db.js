
const mongoose = require("mongoose");

// const URL ="mongodb+srv://pranjalgaikwad572:PPP572@cluster0.gsynjj7.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0"

// MONGODB_URL
// JWT_SECRET_KEY


const URL = process.env.MONGODB_URL;

const connectDb = async() => 
{
    try 
    {
       await mongoose.connect(URL); 
       console.log("Connection successful to the DB");  
    } catch (error) 
    {
     console.error("database connection failed");
    
     process.exit(0);    
    }
};


module.exports = connectDb;