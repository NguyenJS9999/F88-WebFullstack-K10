import express from "express";
import {
  createAttributeValue,
  deleteAttributeValue,
  getAttributeValueById,
  getAttributeValues,
  updateAttributeValue,
} from "../controllers/attributeValueControllers.js";

const attributeValueRoutes = express.Router();

attributeValueRoutes.get("/", getAttributeValues);
attributeValueRoutes.get("/:id", getAttributeValueById);
attributeValueRoutes.post("/", createAttributeValue);
attributeValueRoutes.patch("/:id", updateAttributeValue);
attributeValueRoutes.delete("/:id", deleteAttributeValue);

export default attributeValueRoutes;
