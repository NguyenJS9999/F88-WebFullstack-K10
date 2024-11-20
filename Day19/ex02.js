// (function sum(a, b){
//     return a + b;
// })();
//
// console.log(sum(1, 3));

function* myFunc(a, b, c) {
	const sum = a + b;
	yield sum;

	const result = sum * c;
	yield result;
}

const gen = myFunc(2, 3, 4);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
