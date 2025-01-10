import { Router } from "express";
import productRoutes from "./productRoutes.js";
import authRoutes from "./authRoutes.js";

const routes = Router();

routes.use("/products", productRoutes);
routes.use("/auth", authRoutes);
// /auth/register
// /auth/login

export default routes;
