import { getAllById, getAllProduct } from "./serrvice.js";
const products = await getAllProduct("products");
console.log(products);

const product = await getAllById("products", 1);
console.log(product);