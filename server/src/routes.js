const express = require("express");
const Product = require("../src/controllers/product");
const router = express.Router();

router.get("/product", Product.index);
router.get("/product/:id", Product.findOne);
router.post("/product", Product.insert);
router.put("/product/:id", Product.update);
router.delete("/product/:id", Product.delete);

module.exports = router;
