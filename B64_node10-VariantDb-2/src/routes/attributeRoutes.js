import express from "express";
import {
  createAttribute,
  deleteAttribute,
  getAttributeById,
  getAttributes,
  updateAttribute,
} from "../controllers/atributeControllers.js";

const attributeRoutes = express.Router();

attributeRoutes.get("/", getAttributes);
attributeRoutes.get("/:id", getAttributeById);
attributeRoutes.post("/", createAttribute);
attributeRoutes.patch("/:id", updateAttribute);
attributeRoutes.delete("/:id", deleteAttribute);

export default attributeRoutes;
