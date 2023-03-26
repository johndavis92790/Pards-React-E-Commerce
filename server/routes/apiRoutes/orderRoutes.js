const router = require("express").Router();
const {
  getOrders,
  getOrder,
  createOrder,
  shipOrder,
  deleteOrder,
  addStripeId
} = require("../../controller/orderController");

router.route("/").get(getOrders).post(createOrder);

router.route("/:orderId").get(getOrder).put(shipOrder).delete(deleteOrder);

router.route("/stripe/:utcNumber").put(addStripeId);

module.exports = router;
