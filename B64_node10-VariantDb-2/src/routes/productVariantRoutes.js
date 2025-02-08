import { Router } from "express";
import {
  addVariants,
  getAllVariants,
} from "../controllers/productVariantControllers.js";

const productVariantRouter = Router();

productVariantRouter.get("/", getAllVariants);
productVariantRouter.post("/", addVariants);

export default productVariantRouter;
