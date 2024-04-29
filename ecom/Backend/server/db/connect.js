const mongoose = require("mongoose");


// uri = "mongodb+srv://pranjall_gaikwad:Tech1mini@cluster0.w3fgaaa.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0"


const connectDB = (uri) => 
{
    console.log("connected to the database..");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};


module.exports = connectDB;