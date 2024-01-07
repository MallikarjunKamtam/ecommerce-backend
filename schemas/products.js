const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock_quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Assuming the image is stored as a URL or file path
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
  category_id: {
    type: String,
    required: true,
  },
  sub_category_id: {
    type: String,
    required: true,
  },
});

const Products = mongoose.model("Products", schema);

module.exports = Products;
