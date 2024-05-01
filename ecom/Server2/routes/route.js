
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Product = require('../model/AddProductSchema');
const User = require('../model/UserSchema');

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


        const hashedPassword = await bcrypt.hash(password, 10);


        if(!fname  || !lname || !email || !password)
        {
            return res.status(409).json({message:"Plz Fill the Data"});
        }

  

        const saveUserInDB = new User({
            fname,
            lname, 
            email, 
            password,
            password : hashedPassword
        });

        await saveUserInDB.save();

        res.status(201).json({message: "User added successfully"});

    } 
    catch (err) 
    {
        res.status(409).json({message: "User not added "});
    }
})



//Login API:

router.post("/login", async(req,res) => 
{
    
        const {email, password} = req.body;

        //check whethet already exists or not:

        const checkUser = await User.findOne({email});


        if(!checkUser)
        {
            return res.json({message: "User ,Not Found"});

        }

        if(await bcrypt.compare(password, checkUser.password))
        {
            const token = jwt.sign({email : checkUser.email}, process.env.JWT_SECRET_KEY);

            if (res.status(201))
            {
                return res.json({data:token})
            }
            
            return res.json({message:"Invalid Details"})
            
        }

        return res.json({message:"Invalid Password"});

});




module.exports = router;