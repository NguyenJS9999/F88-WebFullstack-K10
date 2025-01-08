import { Router } from "express";
import productRoutes from "./productRoutes.js";

const routes = Router();

routes.use("/products", productRoutes);

// GET ALL: /products/
// GET BY ID: /products/:id
// CREATE: /products
export default routes;
