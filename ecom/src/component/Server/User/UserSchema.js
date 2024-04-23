const mongoose = require("mongoose");


const RegisterSchema = new mongoose.Schema({

fname: {
    type: String,
    required: true,
},

lname: {
    type: String,
    required: true,
},

email: {
    type: String,
    required: true,
    unique: true
},

password: {
    type: String,
    required: true,
},


})


const User = mongoose.model("user",UserSchema);

module.exports = User;