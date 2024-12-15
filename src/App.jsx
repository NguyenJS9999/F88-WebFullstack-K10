import React from 'react';
import ProductTable from './pages/ProductTable';
// import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increment } from './actions/countActions';

const App = () => {
	// const count = useSelector(state => state.count);
	// const dispatch = useDispatch();
	return <ProductTable/>;
};

export default App;

/**
 	<h1>Count: {count}</h1>
			<button className="btn btn-primary" onClick={() => increment()}>
				Increment
			</button>

			<button className="btn btn-primary" onClick={() =>decrement()}>
				Decrement
			</button>
 * */
