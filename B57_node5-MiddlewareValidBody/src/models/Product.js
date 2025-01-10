import mongoose from "mongoose";
import { Schema } from "zod";

const productSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			default: "Updating",
		},
		categoryId: {
			type: Schema.Types.ObjectId,
			ref: "Category",
		},
	},
	{ timestamps: true, versionKey: false }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
