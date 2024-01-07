const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  product_id: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  payment_info: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Orders = mongoose.model("Orders", schema);

module.exports = Orders;
