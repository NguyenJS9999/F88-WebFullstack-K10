/**
 * Undefined là giá trị đại diện cho không gì cả, chưa được định nghĩa.
 * 1. Biến khởi tạo nhưng chưa được gán giá trị.
 * 2. Đại diện cho những phần tử, thuộc tính không tồn tại trong mảng, đối tượng.
 */

// let userAge;
// console.log(userAge);

// console.log(username);
// var username = "Nguyen Minh Hoang";

// const myStudents = ["Hân", "Hoàng", "Duy"];
// console.log(myStudents[3]);

const product = {
	name: "Iphone 16",
	price: 2000,
	color: "violet",
};

// console.log(typeof product.ram);
// const valueUndefined = undefined;
// console.log(typeof valueUndefined);

/** Null:
 *
 *
 */

let myArray = [];

let myObject = {};

let myVariable = null;
console.log(typeof myVariable);
// myVariable.age = 18;

console.log(myVariable === null);

const productList = null;

console.log(productList ?? "Danh sách sản phẩm trống");
console.log(productList && "Danh sách sản phẩm trống");
console.log(productList || "Danh sách sản phẩm trống");

// &&, ||: tính toán dựa trên các giá trị falsy, truthy:
/**
 * fasle
 * 0, -0
 * "", '', ``
 * null
 * undefined
 * NaN
 */

/**
 * `??` là toán tử kiểm tra giá trị null, unddefined. Nếu biểu thức vế trái của toán tử trả về null, hoặc undefined thì kết quả được gán cho vế phải.
 */

const userInfor = {
	email: "hoangnm@gmail.com",
	password: "1234567890",
};

// cach 1
userInfor.password = undefined;

// Cach 2:
delete userInfor.password;

console.log(userInfor);
