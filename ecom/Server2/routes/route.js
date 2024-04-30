
const express = require("express");
const router = express.Router();

const pSchema = require('../model/AddProductSchema');
const uSchema = require('../model/UserSchema');

//create a add product api:

router.post("/addproduct", async(req,res) => {
    
    try {
        const {name,phone,description} = req.body;

        if(!name  || !phone || !description)
        {
            return res.status(409).json({message:"Plz Fill the Data"});
        }

    const productData = new Product({name, phone, description});
    //it returns a promise:
    await productData.save();

    res.status(201).json({message: "Product added successfully"});

    } 
    catch (err) 
    {
        res.status(409).json({message: "Product not added successfully"});
    }
})


//registration api: user create

router.post("/register", async(req,res) => {
    
    try {
        const {fname, lname, email, password} = req.body;

        if(!fname  || !lname || !email || !password)
        {
            return res.status(409).json({message:"Plz Fill the Data"});
        }

  

        const saveUserInDB = new User({
            fname,
            lname, 
            email, 
            password,
        });

        await saveUserInDB.save();

        res.status(201).json({message: "User added successfully"});

    } 
    catch (err) 
    {
        res.status(409).json({message: "User not added "});
    }
})





module.exports = router;