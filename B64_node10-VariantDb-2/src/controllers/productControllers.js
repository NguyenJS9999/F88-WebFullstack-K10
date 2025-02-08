import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    if (!newProduct)
      return res.status(400).json({ message: "Failed to create product" });
    return res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("categoryId");
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "categoryId",
    );
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct)
      return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const softDeleteProduct = async (req, res) => {
  try {
    const softDeletedProduct = await Product.findByIdAndUpdate(req.params.id, {
      isDeleted: true,
    });

    if (!softDeletedProduct)
      return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product soft deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
