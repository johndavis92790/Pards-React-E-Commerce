const { Order } = require("../models");

//controllers to create, delete and modify orders
const orderController = {
  getOrders: async function (req, res) {
    try {
      const orderData = await Order.find();
      res.json(orderData);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getOrder: async function (req, res) {
    try {
      const orderData = await Order.findById(req.params.orderId);
      res.json(orderData);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  shipOrder: async function (req, res) {
    try {
      const orderData = await Order.findOneAndUpdate({
        _id: req.params.orderId,
      }, req.body);
      res.json(orderData);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  createOrder: async function (req, res) {
    try {
      const orderData = await Order.create(req.body);
      res.json(orderData);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteOrder: async function (req, res) {
    try {
      const orderData = await Order.deleteOne({ _id: req.params.orderId });
      res.json(orderData);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  addStripeId: async function (req, res) {
    try {
      const orderData = await Order.findOneAndUpdate({
        utcNumber: req.params.utcNumber,
      }, req.body);
      res.json(orderData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

module.exports = orderController;
