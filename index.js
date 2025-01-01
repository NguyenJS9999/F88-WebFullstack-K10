import express from "express";
import mongoose from "mongoose";

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

app.get("/products", async (req, res) => {
	try {
		// await MyModel.find({});
	} catch (error) {
		console.log(error);
	}
});

app.get("/products/:id", async (req, res) => {
	try {
		// Model.findById()
	} catch (error) {
		console.log(error);
	}
});

app.delete("/products/:id", async (req, res) => {
	try {
		// Model.findByIdAndDelete()
	} catch (error) {
		console.log(error);
	}
});

app.post("/products", async (req, res) => {
	try {
		// Model.create(req.body)
	} catch (error) {
		console.log(error);
	}
});

app.patch("/products/:id", async (req, res) => {
	try {
		// Model.findByIdAndUpdate(id, dataUpdate, optional)
	} catch (error) {
		console.log(error);
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
