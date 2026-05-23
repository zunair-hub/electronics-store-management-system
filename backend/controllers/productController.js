const Product = require("../models/Product");

// Add new product
const addProduct = async (req, res) => {
  try {
    const { name, category, price, quantity, description } = req.body;

    if (!name || !category || price === undefined || quantity === undefined || !description) {
      return res.status(400).json({ message: "Please fill in all required fields" });
    }

    const product = await Product.create({
      name,
      category,
      price,
      quantity,
      description,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error: error.message });
  }
};

// Get all products
const getProducts = async (req, res) => {
  try {

    const filter = req.query.search
      ? {
          name: { $regex: req.query.search, $options: "i" },
        }
      : {};

    const products = await Product.find(filter).sort({ createdAt: -1 });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
};

// Update product
const updateProduct = async (req, res) => {
  try {
    const { name, category, price, quantity, description } = req.body;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, category, price, quantity, description },
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error: error.message });
  }
};

// Delete product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
};

module.exports = {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};