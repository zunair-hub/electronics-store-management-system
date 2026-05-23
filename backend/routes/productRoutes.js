const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

// Public route: users and admins can view/search products
router.get("/", getProducts);

// Protected admin routes
router.post("/", protect, adminOnly, addProduct);
router.put("/:id", protect, adminOnly, updateProduct);
router.delete("/:id", protect, adminOnly, deleteProduct);

module.exports = router;