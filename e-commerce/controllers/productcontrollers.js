const Product = require('../models/product');

exports.getAll = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.addProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({ msg: "Product added" });
};
