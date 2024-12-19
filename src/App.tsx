import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { IProduct } from "./interfaces/IProduct";
import { useEffect } from "react";
import instance from "./services";
import { fetchProducts } from "./features/products/productActions";

interface RootState {
	products: IProduct[];
}

function App() {
	const products = useSelector((state: RootState) => state.products);

	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			const { data } = await instance.get("/products");
			dispatch(fetchProducts(data));
		})();
	});

	return <></>;
}

export default App;
