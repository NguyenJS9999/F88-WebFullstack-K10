import express from "express";
import mongoose from "mongoose";
import routes from "./src/routes/index.js";

const app = express();
const PORT = 8888;

app.use(express.json());

mongoose
	.connect("mongodb://127.0.0.1:27017/f8-k10")
	.then(() => {
		console.log("Connect database successfully!");
	})
	.catch((error) => {
		console.error(`Connect failed: ${error}`);
	});

// app.get("/products", async (req, res) => {});

// app.get("/products/:id", async (req, res) => {});

// app.delete("/products/:id", async (req, res) => {});

// app.post("/products", async (req, res) => {});

// app.patch("/products/:id", async (req, res) => {});

app.use("/", routes);

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
