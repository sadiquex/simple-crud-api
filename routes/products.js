const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

// GET - get all products
router.get("/", getAllProducts);

// POST - add a product
router.post("/", createProduct);

// GET - a single product
router.get("/:id", getSingleProduct);

// UPDATE - update a product using the id
router.put("/:id", updateProduct);

// DELETE - remove a product by ID
router.delete("/:id", deleteProduct);

module.exports = router;
