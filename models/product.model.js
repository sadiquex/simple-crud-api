const mongoose = require("mongoose");

// define our product schema here
const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a product name"],
    unique: true,
  },
  quantity: {
    type: Number,
    required: [true, "Please enter the quantity"],
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  image: {
    type: String,
    required: false,
  },
  //   timestamps: true,
});

// send our schema to mongoose
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
