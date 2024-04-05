const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const products = require("./routes/products");
// load env variables
dotenv.config({
  path: "./config/config.env",
});

const app = express();

// body parser (we cannot send json directly so we need to parse it with express)
app.use(express.json());

// routes
app.use("/api/v1/products", products);

// connect to our MongoDB
try {
  mongoose.connect(process.env.MONGO_URI);
  console.log(`mongoDB connected`);

  // server entry point
  app.listen(3000, console.log("Server running on port 3000"));
} catch (error) {
  console.error(error);
}
