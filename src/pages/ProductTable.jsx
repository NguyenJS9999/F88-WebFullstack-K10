import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../services/crudServices';

const ProductTable = () => {
	// const [state, setState] = useState([]);
	const count = useSelector(state => state.count);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			const res = await getAll('/products');
			console.log('res', res);
			// setState(await res.json());
			dispatch({ type: 'INCREMENT' });
		})();
	}, []);

	return (
		<>
			<div>Product lit</div>

			<table class="table table-striped">
				<thead>
					<tr>
						<th scope="col">id</th>
						<th scope="col">Title</th>
						<th scope="col">Description</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Larry</td>
						<td>the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default ProductTable;
