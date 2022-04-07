const router = require("express").Router();
const {
  getOrders,
  getOrder,
  createOrder,
  shipOrder,
  deleteOrder,
} = require("../../controller/orderController");

router.route("/").get(getOrders).post(createOrder);

router.route("/:orderId").get(getOrder).put(shipOrder).delete(deleteOrder);

module.exports = router;
