/**
 * arr.reduce(callback, initialValue)
 * - callback - là tham số bắt buộc.
 * - initialValue - là tham số không bắt buộc.
 */

// const arr = [1, 2, 4, 7, 3];

// let total = 0;
// for (let i = 0; i < arr.length; i++) {
// 	total += arr[i];
// }
// console.log(total);

// const result = arr.reduce((accumulator, currentValue, currentIndex, originArray) => {
// 	// console.table({ accumulator, currentValue, currentIndex, originArray });
// 	return (accumulator += currentValue);
// }, 0);

// console.log(result);

// Tìm lớn nhất nhỏ nhất..
// const max = arr.reduce((accumulator, currentValue) => {
// 	let max = currentValue > accumulator ? currentValue : accumulator;
// 	return max;
// }, 0);
// console.log(max);

// Bài toán nhóm phần tử theo thuộc tính

// const employees = [
// 	{ id: 1, name: "Hoang", homeTown: "Hanoi" },
// 	{ id: 2, name: "An", homeTown: "Thaibinh" },
// 	{ id: 3, name: "Huy", homeTown: "Langson" },
// 	{ id: 4, name: "Dinh", homeTown: "Saigon" },
// 	{ id: 5, name: "Dong", homeTown: "Saigon" },
// 	{ id: 6, name: "Nhinh", homeTown: "Langson" },
// ];

// const groupedEmployees = employees.reduce((acc, item) => {
// 	const homeTown = item.homeTown;
// 	if (!acc[homeTown]) {
// 		acc[homeTown] = [];
// 	}
// 	acc[homeTown].push(item);
// 	return acc;
// }, {});

// console.log(groupedEmployees);

// const products = [
// 	{ id: 1, name: "iphone 16", price: 2000, category: "phone" },
// 	{ id: 1, name: "tivi sony", price: 2000, category: "tivi" },
// 	{ id: 1, name: "tivi samsung", price: 2000, category: "tivi" },
// 	{ id: 1, name: "tai nghe abc", price: 2000, category: "phukien" },
// ];

// const groupedProducts = products.reduce((acc, item) => {
// 	const cate = item.category;
// 	if (!acc[cate]) {
// 		acc[cate] = [];
// 	}
// 	acc[cate].push(item);
// 	return acc;
// }, {});
// console.log(groupedProducts);

// Bài toán phát hiện phần tử trùng lặp

const arr = [1, 2, 2, 4, 6, 4, 10, 4];

const uniqueNumbers = arr.reduce((acc, item) => {
	if (!acc.includes(item)) {
		acc.push(item);
	}
	return acc;
}, []);
console.log(uniqueNumbers);

// Đếm số lần xuất hiện của phần tử trong mảng.

const brands = ["Samsung", "Apple", "Oppo", "Huawei", "Samsung", "Apple"];

const result = brands.reduce((acc, current) => {
	if (!acc[current]) {
		acc[current] = 1;
	} else {
		acc[current]++;
	}
	return acc;
}, {});
console.log(result);

const products = [
	{ id: 1, name: "Galaxy 20", price: 200, brand: "Samsung" },
	{ id: 1, name: "Galaxy 21", price: 200, brand: "Samsung" },
	{ id: 1, name: "Galaxy A", price: 200, brand: "Samsung" },
	{ id: 1, name: "Galaxy Note 20", price: 200, brand: "Samsung" },
	{ id: 1, name: "Apple Watch 4", price: 200, brand: "Apple" },
	{ id: 1, name: "Iphone 12 pro max", price: 200, brand: "Apple" },
];
// Output:

const output = { Samsung: 4, Apple: 2 };

const productsQuantityByBrands = products.reduce((acc, current) => {
	const brand = current.brand;
	if (!acc[brand]) {
		acc[brand] = 1;
	} else {
		acc[brand]++;
	}
	return acc;
}, {});
console.log(productsQuantityByBrands);

// Các lỗi thường gặp:
// 1. Quên hoặc nhầm initialValue
//
