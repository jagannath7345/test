const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/compare/:productIds", async (req, res) => {
  const { productIds } = req.query;
  const products = await Product.find({ _id: { $in: productIds } });
  console.log(products)
  const productData = products.map((product) => {
    const { _id, name, price, ratings } = product;
    return { id: _id, name, price, ratings };
  });
  res.json(productData);
});

module.exports = router;
