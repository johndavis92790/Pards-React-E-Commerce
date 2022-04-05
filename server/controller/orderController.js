const { Order } = require("../models");

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
  updateOrder: async function (req, res) {
    try {
      const orderData = await Order.findOneAndUpdate(req.params.orderId);
      res.json(orderData);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  createOrder: async function (req, res) {
    req.body.orderNumber
    try {
      console.log("req.body", req.body);
      const orderData = await Order.create(req.body);
      res.json(orderData);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = orderController;
