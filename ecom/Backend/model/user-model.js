const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
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
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//jwt:

userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);

    const hash_password = await bcrypt.hash(user.password, saltRound);

    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});



//compare password:

userSchema.methods.comparePassword = async function(password)
{
  return bcrypt.compare(password, this.password);
}

//jwt token :

userSchema.methods.generateToken = async function() {

try {

    return jwt.sign({
      userID: this._id.toString(),
      email : this.email,
      isAdmin: this.isAdmin,

    }, 

    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "30d",
    }
  );
    
} catch (error) 
{
   console.error(error);   
}

}






const User = mongoose.model("User", userSchema);

module.exports = User;