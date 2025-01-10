import { Router } from "express";
import { create, getAll, getById, removeById, updateById } from "../controllers/productControllers.js";
import { validBodyRequest } from "../validations/index.js";
import productSchema from "../validations/productSchema.js";

const productRoutes = Router();

productRoutes.get("/", getAll);
productRoutes.get("/:id", getById);
productRoutes.post("/", validBodyRequest(productSchema), create);
productRoutes.patch("/:id", updateById);
productRoutes.delete("/:id", removeById);

export default productRoutes;
