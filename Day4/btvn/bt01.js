const customers = [
	{ name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
	{ name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
	{ name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
	{ name: "Nguyễn Văn D", age: 18, address: "TP.HCM" },
	{ name: "Nguyễn Văn E", age: 13, address: "TP.HCM" },
];

function sortCustomers(arr) {
	const newArr = arr;
	for (let i = 0; i < newArr.length - 1; i++) {
		// console.log("i: ", i);
		for (let j = 0; j < newArr.length - 1 - i; j++) {
			// console.log("j: ", j, newArr[j], newArr[j + 1]);
			if (newArr[j].age > newArr[j + 1].age) {
				let temp = newArr[j];
				newArr[j] = newArr[j + 1];
				newArr[j + 1] = temp;
			}
		}
	}
	return newArr;
}

console.log(sortCustomers(customers));
