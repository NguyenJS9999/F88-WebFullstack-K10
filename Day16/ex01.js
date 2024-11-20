// let myPromise = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		// const data = [
// 		// 	{ id: 1, title: "iphone 16", price: 200 },
// 		// 	{ id: 2, title: "iphone 15", price: 200 },
// 		// ];
// 		resolve("Task A Done");
// 		reject("task A failed");
// 	}, 3000);
// });

function taskA() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			console.log("task A");
			resolve("task A done!");
		}, 3000);
	});
}

// console.log(myPromise);

function taskB() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			resolve("Task B done!");
		}, 2000);
	});
}

function taskC() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			resolve("Task C done!");
		}, 2000);
	});
}

// myPromise
// 	.then((result) => {
// 		console.log("Fulfilled");
// 		console.log(result);
// 		return taskB();
// 	})
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((err) => {
// 		console.log("Rejected");
// 		console.log(err);
// 	});
console.time('promise chaning');
taskA()
	.then((result) => {
		console.log("Fulfilled");
		console.log(result);
		return taskB();
	})
	.then((result) => {
		console.log(result);
		return taskC;
	})
	.then((result) => {
		console.log(result);
		console.timeEnd('promise chaning');
	})
	.catch((err) => {
		console.log("Rejected");
		console.log(err);
	});

/**
 * Promise là một đối tượng đặc biệt.
 * Khai báo promise dùng từ khoá `new Promise` truyền vào 1 hàm.
 */

/**
 * Chaining Promise
 */

fetch('https://dummyjson.com/products')
.then(res => res.json)
.then((data) => {
	console.log(data);
})
.catch((data) => {
	console.log(data);
})
.finally((data) => {
	console.log(data);
})



