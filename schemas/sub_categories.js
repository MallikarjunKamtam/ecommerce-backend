const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  category_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const SubCategory = mongoose.model("SubCategory", schema);

module.exports = SubCategory;
