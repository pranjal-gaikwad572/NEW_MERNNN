
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    //schema :

    name:
    {
        type: String,
        required: true
    },

    phone:
    {
        type: Number,
        required: true
    },
    description:
    {
        type: String,
        required: true
    }

});

// captital1st               // "small and singular"  //varname
const Product = mongoose.model("product", productSchema)


module.exports = Product;
