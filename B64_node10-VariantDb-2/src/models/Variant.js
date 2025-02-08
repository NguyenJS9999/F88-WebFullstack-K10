import mongoose from "mongoose";

const productVariantSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    attributes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AttributeValue",
        required: true,
      },
    ],
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false },
);

const ProductVariant = mongoose.model("ProductVariant", productVariantSchema);
export default ProductVariant;
