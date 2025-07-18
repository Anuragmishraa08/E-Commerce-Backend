const Order = require('../models/order');

exports.createOrder = async (req, res) => {
  const { products, amount, address } = req.body;
  const order = new Order({ userId: req.user.id, products, amount, address });
  await order.save();
  res.json({ msg: "Order placed" });
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.json(orders);
};
