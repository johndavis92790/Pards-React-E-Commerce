const { Schema, model } = require("mongoose");

let counter = 1;
let CountedId = { type: Number, default: () => counter++ };

//order schema
const orderSchema = new Schema(
  {
    orderNumber: CountedId,
    status: {
      type: String,
    },
    tracking: {
      type: String,
    },
    items: [],
    subtotal: {
      type: Number,
    },
    shipping: {
      type: Number,
    },
    tax: {
      type: Number,
    },
    total: {
      type: Number,
    },
    billingFirstName: {
      type: String,
      trim: true,
    },
    billingLastName: {
      type: String,
      trim: true,
    },
    billingAddress1: {
      type: String,
      trim: true,
    },
    billingAddress2: {
      type: String,
      trim: true,
    },
    billingCity: {
      type: String,
      trim: true,
    },
    billingState: {
      type: String,
      trim: true,
    },
    billingZip: {
      type: String,
      trim: true,
    },
    shippingFirstName: {
      type: String,
      trim: true,
    },
    shippingLastName: {
      type: String,
      trim: true,
    },
    shippingAddress1: {
      type: String,
      trim: true,
    },
    shippingAddress2: {
      type: String,
      trim: true,
    },
    shippingCity: {
      type: String,
      trim: true,
    },
    shippingState: {
      type: String,
      trim: true,
    },
    shippingZip: {
      type: String,
      trim: true,
    },
    billingEmail: {
      type: String,
      trim: true,
    },
    utcString: {
      type: String,
    },
    utcNumber: {
      type: Number,
    },
    stripeId: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
const Order = model("Order", orderSchema);

module.exports = Order;