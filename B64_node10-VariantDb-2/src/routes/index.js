import { Router } from "express";

import categoryRoutes from "./categoryRoutes.js";
import authRoutes from "./authRoutes.js";
import attributeRoutes from "./attributeRoutes.js";
import attributeValueRoutes from "./attributeValuesRoutes.js";
import productRoutes from "./productRoutes.js";
import productVariantRouter from "./productVariantRoutes.js";

const routes = Router();

routes.use("/products", productRoutes);
routes.use("/product-variants", productVariantRouter);
routes.use("/attributes", attributeRoutes);
routes.use("/attribute-values", attributeValueRoutes);
routes.use("/categories", categoryRoutes);
routes.use("/auth", authRoutes);

export default routes;
