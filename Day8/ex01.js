/**
 * Toán tử rest
 * -
*/

const arr = ["Nguyen","Duy", "Giang"]

const [ student1, student2, ...rest ] = arr;
console.log(rest);

const obj = { name: "Hoàng", age: 32, address: "HN", age: 23}


function sum(...args) {
	// let total = 0;
	// for(let i= 0; i < args.length; i++ ) {
	// 	total += args[i]
	// }
	// return total;

	return args.reduce((acc, cur) => (acc += cur))


}

console.log(sum(1, 2, 3, 4)); // [1,2,3,4] . 1,2,3,4


