const Product = require('../model/product-model');

//function logic of products:

const products = async (req,res) =>
    {
       try {
      
        const response = await Product.find();

        if(!response)
            {
                res.status(404).json({msg: "No product Found"});

                return;
            }
        res.status(200).json({msg: response});

        
       } catch (error) {
        console.log(`products: ${error}`)
       }
    }

    module.exports = {products};