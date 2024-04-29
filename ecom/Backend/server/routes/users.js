const express = require("express");

const router = express.Router();

const {getAllData,getAllLoginData} = require("../controllers/users.js");

//routers are used to define the paths: path => and what to do
//when local host../ = then it will go to the particular function as mentioned below:
router.route("/data").get(getAllData);

router.route("/login").get(getAllLoginData);





module.exports = router;
