import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';
import Footer from './components/footer/Footer';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/product/:id" element={<ProductDetailPage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/service" element={<ServicePage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/admin" element={<DashBroadPage />}>
					<Route
						path="/product"
						element={<ProductDetailPage />}
					/>
				</Route>

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
