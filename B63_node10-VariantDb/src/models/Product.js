import mongoose from "mongoose";
import slugMiddleware from "../middlewares/slugMiddleware.js";

export const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    // price: { type: Number, required: true },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      // default: "67836a60a83094583683c85e", // unclassified
    },
    description: { type: String },
    isHidden: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
    slug: {
      type: String,
      unique: true,
    },
    soldCount: {
      type: Number,
      default: 0,
    },
    // stock: {
    //   type: Number,
    // },
    rate: {
      type: Number,
    },
    variants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductVariant",
      },
    ],
  },
  { timestamps: true, versionKey: false },
);

productSchema.virtual("variantsData", {
  ref: "ProductVariant",
  localField: "variants",
  foreignField: "_id",
});

productSchema.plugin(slugMiddleware("title", "slug"));
const Product = mongoose.model("Product", productSchema);

export default Product;
