const Product = require("../models/product.model");

// GET - get all products controller
exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();

    res.status(200).json({
      success: true,
      data: allProducts,
    });
  } catch (error) {
    res.status(500).json({ data: error.message });
  }
};

// GET - a single product
exports.getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res
        .status(404)
        .json({ message: `No product with ID of ${req.params.id} not found` });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({ data: error.message });
  }
};

// POST - add a product
exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({ data: newProduct });
  } catch (error) {
    res.status(500).json({ data: error.message });
  }
};

// UPDATE - update a product using the id
exports.updateProduct = async (req, res) => {
  try {
    const productToUpdate = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!productToUpdate) {
      return res
        .status(404)
        .json({ message: `No product with ID of ${req.params.id} not found` });
    }

    // find the updated product in the db
    const updatedProduct = await Product.findById(req.params.id);

    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ data: error.message });
  }
};

// DELETE - remove a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const productToDelete = await Product.findOneAndDelete(req.params.id);

    if (!productToDelete) {
      return `No product with ID of ${req.params.id}`, 404;
    }
    res.status(200).json({ success: true, data: "product deleted" });
  } catch (error) {
    res.status(500).json({ data: error.message });
  }
};
