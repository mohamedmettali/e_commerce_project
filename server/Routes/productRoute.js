const express = require("express");
const router = express.Router();
const Product = require("../Models/products");

// Route: GET /products
// Description: Get all products
// Public access
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error getting products:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route: POST /products
// Description: Create a new product
// Private access (requires authentication)
router.post("/addproduct", async (req, res) => {
  try {
    const { name, description, price, stockQuantity } = req.body;

    // Create a new product
    const newProduct = new Product({
      name,
      description,
      price,
      stockQuantity,
    });

    // Save the product to the database
    await newProduct.save();

    res.status(201).json({ message: "Product created successfully" });
  } catch (error) {
    console.error("Error creating product:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;