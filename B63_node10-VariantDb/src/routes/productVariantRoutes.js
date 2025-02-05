import { Router } from "express";
import {
  createVariantProduct,
  getVariantsByProduct,
} from "../controllers/productVariantControllers.js";

const productVariantRoutes = Router();

productVariantRoutes.post("/", createVariantProduct);
productVariantRoutes.get("/:productId", getVariantsByProduct);

export default productVariantRoutes;
