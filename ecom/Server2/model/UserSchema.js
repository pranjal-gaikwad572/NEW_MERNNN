
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    //schema :

    fname:
    {
        type: String,
        required: true
    },

    lname:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        required: true
    }

});

// captital1st               // "small and singular"  //varname
const User = mongoose.model("user", userSchema)


module.exports = User;
