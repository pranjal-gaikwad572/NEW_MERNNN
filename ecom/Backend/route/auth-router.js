const express = require("express");
const router = express.Router();

// const {home, register} = require("../controllers/auth-controller");

const authcontrollers = require("../controllers/auth-controller");
const authMiddleware = require("../middlewares/auth-Middleware");




router.route("/").get(authcontrollers.home);

router.route("/register").post(authcontrollers.register);
router.route("/login").post(authcontrollers.login);

router.route("/user").get(authMiddleware ,authcontrollers.user);

router.route("/add-to-cart").post(authcontrollers.addToCart);

// router.route("/getcart").post(authcontrollers.getCart);


module.exports = router;