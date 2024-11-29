// import React from 'react'
//
// function ShopPage() {
//   return (
// 	<div>ShopPage</div>
//   )
// }
//
// export default ShopPage

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShopPage = () => {
	const [products, setProducts] = useState([]);
	const [limit, setLimit] = useState(10);
	const [skip, setSkip] = useState(0);
	useEffect(() => {
		fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
			.then(res => res.json())
			.then(({ products }) => {
				// console.log(products);
				setProducts(products);
			});
	}, [limit, skip]);

	const handleSelectLimit = e => {
		const selectedLimit = e.target.defaultValue;
		console.log(selectedLimit);
		if (selectedLimit === 'all') {
			console.log('get All');
		} else {
			setLimit(selectedLimit);
		}
	};
	return (
		<div>
			<h2>Danh sach san pham</h2>

			<div>
				{/* {products && products.length > 0 && (
				<select onChange={e => handleSelectLimit(e)}>
					<option className='pagination-option' defaultValue={10}>{10}</option>
					<option className='pagination-option' defaultValue={20}>{20}</option>
					<option className='pagination-option' defaultValue={30}>{30}</option>
					<option value="all">Tất cả</option>
				</select>
			)} */}
			</div>

			<nav aria-label="Page navigation example">
				<ul className="pagination">
					<li className="page-item">
						<span className="page-link" href="#">
							Previous
						</span>
					</li>

					{products &&
						products.map((item, index) => (
							<li className="page-item" key={item?.id ?? index}>
								<span
									className="page-link"
									href="#"
									defaultValue={index + 1}
								>
									{index + 1}
								</span>
							</li>
						))}

					{Array.from(products.length, item => (
						<li className="page-item" key={item?.id ?? index}>
							<span
								className="page-link"
								href="#"
								defaultValue={index + 1}
							>
								{index + 1}
							</span>
						</li>
					))}

					<li className="page-item">
						<span className="page-link" href="#">
							Next
						</span>
					</li>
				</ul>
			</nav>

			{products.map(item => (
				<div key={item.id}>
					<Link to={`/product/${item.id}`}>
						<img src={item.thumbnail} alt={item.title} />
					</Link>
					<span>{item.id}</span>
					<h3>{item.title}</h3>
					<p>Giá: {item.price}</p>
					<Link
						to={`/product/${item.id}`}
						className="btn btn-danger"
					>
						Xem chi tiết
					</Link>
				</div>
			))}
			{/* nut bam phan trang */}
		</div>
	);
};

export default ShopPage;
