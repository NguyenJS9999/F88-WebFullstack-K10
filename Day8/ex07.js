/**
 * BOM
*/

console.log(window.innerHeight);
console.log(window.innerWidth);

// const age = window.prompt("Ban bao nhieu tuoi")
// const isConfirm = confirm("Ban dong y chuyen trang khong")
// console.log(age);

console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator);
console.log(screen);
console.log(history);
console.log(location);

// setTimeout()
/**
 * setTimeote(callback, số mini)
*/
const result = setTimeout(() => {
	// console.log("Hello");
}, 5000)

console.log(result);
const result2 = setInterval(() => {
	// console.log("Hello Interval");
}, 5000)

let initTime = 0;

const result3 = setInterval(() => {
	initTime++;
	if (initTime > 99) {
		clearInterval(result3);
	}
	console.log("initTime: ", initTime)
}, 1);
