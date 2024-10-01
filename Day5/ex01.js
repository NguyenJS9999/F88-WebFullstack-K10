/** Khai báo mảng */
// const arr1 = [1, 2, 3, 4, 5];

// console.log(arr1);
// console.log(typeof arr1);

// console.log(Array.isArray(arr1));
// Nếu sử dụng new Array() với tham số truyền vào là n, thì được mảng n phần tử empty.
// const arr2 = new Array();
// console.log(arr2);

// console.log(arr1["1"]);

// arr1 -> [1,2,3,4,5,6]

// Cách tính độ dài của mảng.
// arr1[10] = "hoang";
// console.log(arr1);

// delete arr1[2];
// console.log(arr1);

// Xoá phần tử có index = 2.

// const students1 = ["Hoang", "Long", "Duy"];
// const students2 = ["An", "Tuan", "Huy", "Dong"];
// Gộp mảng.

/**
 * Có thể thay đổi mảng gốc
 * Bước 1: coi một mảng là mảng gốc, tính độ dài mảng gốc
 * Bước 2: Duyệt qua từng phần tử của mảng phụ, sau đó thêm phần tử ở mảng phụ vào mảng gốc.
 */

// for (let i = 0; i < students2.length; i++) {
// 	students1[students1.length] = students2[i];
// }
// console.log(students1);

/**
 * Tạo ra một mảng gộp mới
 * Bước 1: Tạo ra biến tạm `str`
 * Bước 2: Tạo 2 vòng for không lồng nhau, lần lượt nối các phần tử vào `str`.
 * Bước 3: Chuyển đổi `str` về arr.
 */

// const students = [];

// for (let i = 0; i < students1.length; i++) {
// 	students[students.length] = students1[i];
// }

// for (let i = 0; i < students2.length; i++) {
// 	students1[students1.length] = students2[i];
// }
// console.log(students1);

// const students = students1.concat(students2);
// console.log(students);
// console.log(students1);
// console.log(students1 === students);

// So sánh mảng
// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// console.log(arr1 === arr2);
const students1 = ["Hoang", "Long", "Duy"];

// Duyệt qua từng phần tử của mảng
// for
for (let i = 0; i < students1.length; i++) {
	console.log(students1[i]);
}

// For...in
for (index in students1) {
	console.log(`phần tử ở vị trí ${index} có giá trị là: ${students1[index]}`);
}

// For...of
for (value of students1) {
	console.log(value);
}

const employees = [
	{ name: "Hoang", age: 18, address: "BG" },
	{ name: "Dong", age: 24, address: "BG" },
	{ name: "Xuan", age: 12, address: "BG" },
	{ name: "Duy", age: 28, address: "ND" },
	{ name: "Huy", age: 32, address: "LS" },
];

// Tìm ra nhân viên lớn tuổi nhất, nếu 2 nhân viên lớn tuổi nhất có số tuổi bằng nhau thì lấy người đầu tiên tìm được.

/**
 * Bước 1: Giả định phần tử đầu tiên là nhân viên lớn tuổi nhất và gán cho 1 biến maxAge, tạo vòng for duyệt qua từng phần tử của mảng
 * Bước 2: So sánh 2 phần từ liên tiếp trong vòng lặp for, nhân viên nào có tuổi lớn hơn thì gán cho maxAge.
 * Chạy hết vòng lặp thì maxAge chính là nhân viên lớn tuổi nhất.
 */

let max = es[0];

for (let i = 0; i < employees.length; i++) {
	// Nếu nhân viên thứ i có tuổi lớn hơn max thì max = employes[i]
	if (employees[i].age > max.age) {
		max = employees[i];
	}
}

console.log(max);
