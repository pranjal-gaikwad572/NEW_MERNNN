
const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const RegisterModel = require("../../../modules/Auth/Server/Register");


const app = express()

app.use(cors())

app.use(express.json())

mongoose.connect("mongodb+srv://pgaikwad:Tech1mini@cluster0.4nv1ert.mongodb.net/test");

app.post('/register', (req,res) => {
    const {name,email,password} = req.body;
    RegisterModel.findOne({email:email})

    .then(user => {
      if(user) {
        res.json("Already Have an account")
      }
      else{
        RegisterModel.create({name: name,email: email,password:password })
      
        .then(result => res.json(result))
        .catch(err => res.json(err))
    
    }
    }).catch(err => res.json(err))
})

app.listen( 3001, () => {
    console.log("Server is running")
})