// const arr = ["hoang", "duy", "long", "giang"];

// arr[10] = 100;
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

/**
 * for
 * - Duyệt cả giá trị empty.
 * - Muốn tuỳ chỉnh biến đếm.
 * - Muốn có nhiều quyền kiểm soát với vòng lặp hơn là chỉ sử dụng phương thức của mảng: continue, break.
 */

// for (index in arr) {
// 	console.log(index);
// }

// for (value of arr) {
// 	console.log(value);
// }

/**
 * for in: duyệt qua index của từng phần tử.
 * - bỏ qua các phần tử empty
 *
 */

/**
 * for of: Duyệt qua từng phần tử cuả mảng.
 *  - phần tử empty nếu được truy xuất giá trị sẽ nhận `undefined`
 */

const arr = [
	{ id: 1, name: "hoang" },
	{ id: 2, name: "duy" },
	{ id: 3, name: "long" },
	{ id: 4, name: "giang" },
];

arr.forEach((item, index) => {
	if (!item.cart) {
		item.cart = [];
	}
});

console.log(arr);

// Thêm `cart: []` cho từng khách hàng trong danh sách khách hàng.
// Output:
// const newArr = [
// 	{ id: 1, name: "hoang", cart: [] },
// 	{ id: 2, name: "duy", cart: [] },
// 	{ id: 3, name: "long", cart: [] },
// 	{ id: 4, name: "giang", cart: [] },
// ];
