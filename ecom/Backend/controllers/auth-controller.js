const { model } = require('mongoose');
const User = require('../model/user-model')
const bcrypyt = require("bcryptjs");

const home = async (req,res) =>
{

    try 
    {
        res.status(200).send("welcome to the techathalon Home...!")
    
    } catch (error) 
    {
        console.log(error);
    }
}


// Registration Logic :

const register = async(req, res) =>{
    try 
    {   
        console.log(req.body);

        const {fname, lname, email, password}= req.body;

        const userExist =  await User.findOne({email});
        
        if(userExist)
            {
                return res.status(400).json({msg : "email already exists"});
            }


            //hash the password:

            // const saltRound = 10;

            // hash_password

            // const hash_password = await bcrypyt.hash(password, 10);

             const userCreated = await User.create(
            {
                fname, 
                lname, 
                email, 
                password,
             });



        res.status(200).json({msg: "registration successful"  ,
            token : await userCreated.generateToken(),
            userId: userCreated._id.toString(), 
        });

     

    } catch (error) {
        res.status(500).json(error);
    }
};




////user login:

const login = async (req,res) =>
{
    try 
    {

        const {email, password} = req.body;

        const userExist = await User.findOne({email});

        console.log(userExist);


        if(!userExist)
            {
                return 

                res.status(400).json({message: "Invalid Credentials"});
            }

            // const user = await bcrypyt.compare(password, userExist.password);

            const user = await userExist.comparePassword(password);

            if(user)
            {
               res.status(200).json({
                msg: "Login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
               })
            }
            else
            {
                res.status(401).json({ message: "Invalid email orv password"});
            }
        
    } catch (error) 
    {
        res.status(500).json("Internal server error");
    }
}


//user logic: to send user data:

const user =  async(req,res) =>
    {
        try {

            const userData = req.user;
            console.log(userData);


            return res.status(200).json({msg: userData});

        } catch (error) {
            console.log(`Error from the user route ${error}`);
        }
    }


    const addToCart = async (req, res) => {
        try {
          const { productId, userId } = req.body;
      console.log(req.body)
          // Find the user's cart
          const user = await User.findOne({ _id : userId });
          if (!user) {
            return res.status(404).json({ msg: "User not found" });
          }
      
          // Check if the product is already in the cart
          const isProductInCart = user.cart.find((item) => item.id === productId);
          console.log(isProductInCart)
          if (isProductInCart) {
            user.cart.push(productId);
            return res.status(200).json({ msg: "Product added" });
          }
      
          // Add the product to the cart
          user.cart.push({productId : productId});
          await user.save();
      
          return res.status(200).json({ msg: "Product added to cart successfully" });
        } catch (error) {
          console.log(error);
          return res.status(500).json({ msg: "Server Error" });
        }
      };


   


// const getCart = async (req,res) =>
//     {
//         const userId = req.body.user_Id;

//         const data = await user-model.findOne({_id:userId});

//         if(data) 
//             {
//                 return res.send({code: 200, message:'Get cart success', data:data});
//             }
//             else
//             {
//                 return res.send({code: 500, message:'Server Error'});
//             }
//     }



module.exports = {home, register, login, user, addToCart};