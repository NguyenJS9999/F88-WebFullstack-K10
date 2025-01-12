import { Router } from "express";
import productRoutes from "./productRoutes.js";
import authRoutes from "./authRoutes.js";

const routes = Router();

routes.use("/auth", authRoutes);

routes.use("/products", productRoutes);
routes.use("/categories", () => console.log("categories"));

export default routes;
