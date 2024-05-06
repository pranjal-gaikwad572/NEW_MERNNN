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






module.exports = {home, register, login, user};