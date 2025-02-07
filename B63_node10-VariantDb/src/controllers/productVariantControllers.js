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



// 3 Lấy chi tiết một biến thể theo ID
export const getVariantById = async (req, res) => {
  try {
    const { id } = req.params;
    const variant = await ProductVariant.findById(id);
    if (!variant) {
      return res.status(404).json({ message: "Variant not found" });
    }
    res.json({
      message: "Get variant successfully",
      variant,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật thông tin biến thể
export const updateVariantProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { size, color, price, stock } = req.body;

    const updatedVariant = await ProductVariant.findByIdAndUpdate(
      id,
      { size, color, price, stock },
      { new: true, runValidators: true }
    );

    if (!updatedVariant) {
      return res.status(404).json({ message: "Variant not found" });
    }

    res.json({
      message: "Update variant successfully",
      updatedVariant,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Xóa một biến thể sản phẩm
export const deleteVariantProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedVariant = await ProductVariant.findByIdAndDelete(id);

    if (!deletedVariant) {
      return res.status(404).json({ message: "Variant not found" });
    }

    res.json({
      message: "Delete variant successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
