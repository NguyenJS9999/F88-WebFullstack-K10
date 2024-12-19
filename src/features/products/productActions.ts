import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProduct, deleteProduct, getAllProducts, updateProduct } from "../../services/productServices";
import { IProduct } from "../../interfaces/IProduct";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
	return await getAllProducts();
});

export const createProduct = createAsyncThunk("products/createProduct", async (product: IProduct) => {
	return await addProduct(product);
});

export const editProduct = createAsyncThunk(
	"products/editProduct",
	async ({ id, product }: { id: number; product: IProduct }) => {
		return await updateProduct(id, product);
	}
);

export const removeProduct = createAsyncThunk("products/removeProduct", async (id: number) => {
	await deleteProduct(id);
	return id;
});
