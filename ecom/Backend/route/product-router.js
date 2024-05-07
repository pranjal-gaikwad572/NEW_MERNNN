const express = require("express");

const router = express.Router();

const {products , findproductsById} = require('../controllers/product-controller');

router.route("/product").get(products);
router.route("/product/:id").get(findproductsById);


module.exports = router;




