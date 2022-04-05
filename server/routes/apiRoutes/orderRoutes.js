const router = require("express").Router();
const {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
} = require("../../controller/orderController");

router.route("/").get(getOrders).post(createOrder);

router.route("/:orderId").get(getOrder).put(updateOrder);

module.exports = router;
