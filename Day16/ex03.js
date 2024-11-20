const fetApiBtnElement = document.querySelector('fetch-api');

// fetch('https://dummyjson.com/products', {
// 	method: 'GET',
// })
// .then( res => res.json() )
// .then( data => console.log(data) )
// .catch( err => console.log(err) )

async function fetchAPI( type ) {
	try {
		const response = await fetch(`https://dummyjson.com/${type}`, {
			method: 'GET'
		});
		const data = await response.json();
		console.log('data', data);
	} catch (error) {
		console.log('error', error);
//
	}

}

console.log(fetchAPI('products'));
console.log(fetchAPI('post'));


// async function updateById

fetApiBtnElement.addEventListener('click', fetchAPI);

