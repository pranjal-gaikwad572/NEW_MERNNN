const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => 
{
 console.log("DB is connected successfully..!!")
}).catch ((err) => {
 console.log("Error while calling when the databse is connected..!", err)
})

