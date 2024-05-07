const Product = require('../model/product-model');

//function logic of products:

const products = async (req,res) =>
    {
       try {
      
        const response = await Product.find({});
        // console.log(response);

        if(!response)
            {
                res.status(404).json({msg: "No product Found"});

                return;
            }
        res.status(200).json({products: response});

        // res.status(200).json({response});

        
       } catch (error) {
        console.log(`products: ${error}`)
       }
    }
const findproductsById = async (req,res) =>
    {
       try {
        const {id} = req.params;
        const response = await Product.find({_id :  id});

        console.log(response);

        if(!response)
            {
                res.status(404).json({msg: "No product Found"});

                return;
            }
        res.status(200).json({product: response});

        
       } catch (error) {
        console.log(`products: ${error}`)
       }
    }

    module.exports = {products ,findproductsById};