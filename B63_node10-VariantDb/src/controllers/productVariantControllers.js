import ProductVariant from "../models/ProductVariant.js";

export const createVariantProduct = async (req, res) => {
  try {
    const { productId, size, color, price, stock } = req.body;
    const variant = await ProductVariant.create({
      productId,
      size,
      color,
      price,
      stock,
    });
    res.status(201).json({
      message: "Create variant successfully",
      variant,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Lấy danh sách biến thể của 1 sản phẩm
export const getVariantsByProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const variants = await ProductVariant.find({ productId });
    res.json({
      message: "Get variants successfully",
      variants,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
