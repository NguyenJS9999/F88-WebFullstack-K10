const url = "http://dummy.json.com";
async function getAll(path) {
	try {
		const res = await fetch(`${url}/${path}`)
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

async function getAllById(path, id) {
	try {
		const res = await fetch(`${url}/${path}/${id}`)
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

export {
	getAll as getAllProduct,
	getAllById,
 }