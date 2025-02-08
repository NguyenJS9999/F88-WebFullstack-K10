import Product from "../models/Product.js";
import ProductVariant from "../models/Variant.js";

export const addVariants = async (req, res) => {
  try {
    const { productId, variants } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Nếu có sản phẩm thì thêm các biến thể vào sản phẩm
    const newVariants = await ProductVariant.insertMany(
      variants.map((variant) => ({
        productId,
        ...variant,
      })),
    );
    console.log(newVariants);

    // Thêm id của biến thể vào sản phẩm
    product.attributes.push(...newVariants.map((variant) => variant._id));
    await product.save();

    return res
      .status(201)
      .json({
        message: "Variants added successfully",
        variants: newVariants,
        product,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllVariants = async (req, res) => {
  try {
    const products = await Product.find().populate(
      "attributes.attributeId attributes.value",
    );
    const variants = products.flatMap((product) =>
      product.attributes.map((attr) => ({
        productId: product._id,
        variantId: attr._id,
        attributeId: attr.attributeId,
        value: attr.value,
        stock: attr.stock,
        price: attr.price,
      })),
    );
    res.status(200).json(variants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateVariants = async (req, res) => {
  try {
    const { productId, variants } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    variants.forEach((updatedVariant) => {
      const variant = product.attributes.find(
        (attr) => attr._id.toString() === updatedVariant.variantId,
      );
      if (variant) {
        variant.attributeId = updatedVariant.attributeId || variant.attributeId;
        variant.value = updatedVariant.value || variant.value;
        variant.stock = updatedVariant.stock || variant.stock;
        variant.price = updatedVariant.price || variant.price;
      }
    });
    await product.save();

    res.status(200).json({ message: "Variants updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteVariants = async (req, res) => {
  try {
    const { productId, variantIds } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.attributes = product.attributes.filter(
      (attr) => !variantIds.includes(attr._id.toString()),
    );
    await product.save();

    res.status(200).json({ message: "Variants deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const softDeleteVariants = async (req, res) => {
  try {
    const { productId, variantIds } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.attributes.forEach((attr) => {
      if (variantIds.includes(attr._id.toString())) {
        attr.isDeleted = true;
      }
    });
    await product.save();

    res.status(200).json({ message: "Variants soft deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
