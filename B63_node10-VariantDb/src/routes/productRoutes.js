import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  restoreProduct,
  softDeleteProduct,
  updateProduct,
} from "../controllers/productControllers.js";
import productSchema from "../schemas/productSchemas.js";
import { validBodyRequest } from "../middlewares/validBodyRequest.js";
import verifyUser from "../middlewares/verifyUser.js";

const productRoutes = Router();

productRoutes.get("/", getAllProducts);
productRoutes.get("/:id", getProductById);
productRoutes.post(
  "/",
  verifyUser,
  validBodyRequest(productSchema),
  createProduct,
);
productRoutes.patch("/:id", validBodyRequest(productSchema), updateProduct);
productRoutes.patch("/soft-delete/:id", softDeleteProduct);
productRoutes.patch("/restore/:id", restoreProduct);
productRoutes.delete("/:id", deleteProduct);

export default productRoutes;
