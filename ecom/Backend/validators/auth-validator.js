const {z} = require("zod");

//creating object schema:
const signupSchema = z.object({
    
    
    fname: z
    .string({required_error: ""})
    .trim()
    .min(3, {message: "First Name must be atleast of 3 characters"})
    .max(255, {message: " First Name must not be more than 255 characters"}),

    lname: z
    .string({required_error: ""})
    .trim()
    .min(5, {message: " Last Name must be atleast of 3 characters"})
    .max(250, {message: " Last Name must not be more than 255 characters"}),

    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email({message:"Invalid Email Address"})
    .min(5, {message: "Email must be atleast of 3 characters"})
    .max(255, {message: "Name must not be more than 255 characters"}),


    password: z
    .string({required_error: "Password is required"})
    .min(7, {message: "Password must be atleast of 7 characters"})
    .max(1024, {message: "Password must not be more than 1024 characters"}),

    

})


module.exports = signupSchema;