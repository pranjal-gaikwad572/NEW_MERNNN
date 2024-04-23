const User = require("../Server/User/UserSchema");


//user create:

const User = require("../Server/User/UserSchema");

router.post("/register", async(req,res) => {
try 
{

const{fname, lname, email, password} = req.body;

if(!fname || !lname || !email || !password)
{

    return res.status(409).json({message:"plz fill the data"});

}

const saveUserInDB = new User({

    fname,
    lname,
    email,
    password,
});

await saveUserInDB.save();
res.status(201).json({message:"Contact added successfully"})
} 
catch (err) 
{
    res.status(409).json({message:"Contact not added"})
}

})


module.exports = router;