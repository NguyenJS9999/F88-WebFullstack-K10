/**
 * some()
 * - Không thay đổi mảng gốc.
 * - array.some(callback) - callback là tham số bắt buộc.
 * - kiểm tra xem có ít nhất 1 phần tử của mảng thoả mãn điều kiện hay không?
 */

// const arr = [1, 2, 3, 4, 5];

// const result = arr.some((item, index) => {
// 	return item >= 5;
// });

// console.log(result);

/**Dùng some() để kiểm tra một mảng có phần tử nào là số chẵn hay không? */

// const result2 = arr.some((item, index) => {
// 	console.log(item);
// 	return typeof item === "number" && item % 2 === 0;
// });

// if (result2) {
// 	console.log(`arr có chứa ít nhất 1 phần tử là số chẵn`);
// } else {
// 	console.log(`arr không chứa phần tử nào là số chẵn`);
// }

// console.log(arr.some());

const employees = [
	{ id: 1, name: "Hoang", homeTown: "Hanoi", gender: "male" },
	{ id: 2, name: "An", homeTown: "Thaibinh", gender: "male" },
	{ id: 3, name: "Huy", homeTown: "Langson", gender: "male" },
	{ id: 4, name: "Dinh", homeTown: "Saigon", gender: "male" },
	{ id: 5, name: "Dong", homeTown: "Saigon", gender: "" },
	{ id: 6, name: "Nhinh", homeTown: "Langson", gender: "female" },
	{ id: 7, name: "Tao", homeTown: "Danang", gender: "male" },
];

/** Kiểm tra xem danh sách nhân viên có ai là nữ không? */

// const result = employees.some((item) => (temp = item.gender === "female"));

// console.log(result);

// const result2 = employees.every((item) => (temp = item.gender === "female"));
// console.log(result2);

/**
 * every()
 * - Không thay đổi mảng gốc.
 * - array.every(callback) - callback là tham số bắt buộc.
 * - kiểm tra xem mọi phần tử của mảng có cùng thoả mãn điều kiện đưa ra hay không?
 */

// Dùng every() để kiểm tra xem mỗi nhân viên đều có đầy đủ thông tin id, name, homeTown, gender hay không?

const result = employees.every((item) => {
	return item.id && item.name && item.homeTown && item.gender;
});

console.log(result);
