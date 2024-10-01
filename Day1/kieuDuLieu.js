// let usename = "Hoang"; // string
let age = 32; // number
let birthyear = 1992;
let acc = -10000;

let status = true; // boolean = kiểu dữ liệu luận lí (true, false)

/**
 * Kiểu dữ liệu nguyên thuỷ
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Undefined
 * 5. Null
 * 6. bigInt
 * 7. Symbol
 */

let a = 10;
let b = 3;
// Toán tử số học
console.log(a + b); // cộng
console.log(a - b); // trừ
console.log(a * b); // nhân
console.log(a / b); // chia
console.log(a % b); // chia lấy dư
console.log(a ** b); // phép luỹ thừa
// ++
// --

// Toán tử so sánh:
console.log(a > b); // lớn hơn
console.log(a == b); // bằng
console.log(a < b); // nhỏ hơn
console.log(a <= b); // nhỏ hơn hoặc bằng
console.log(a >= b); // lớn hơn hoặc bằng
console.log(a === b); // so sánh bằng tuyệt đối
console.log(a != b); // so sánh khác
console.log(a !== b); // so sánh khác tuyệt đối

let x = 10;
let y = "10";
console.log(x == y);
console.log(x === y);

// Toán tử logic
let dung = true;
let sai = false;
console.log(true && true && false && true);
// &&: Tất cả đều đúng thì đúng
console.log(a && b && x && y); // true - false, 10, 3
// console.log(a || b);

// Truthy và falsy
/**
 *  Những giá trị khi ép kiểu boolean nhận giá trị "false"
 * false
 * 0
 * -0
 * "", ``, ''
 * null
 * undefined
 * NaN
 */

console.log(3 && 2 && 0);
console.log(3 && null && 5 && false);

console.log(false || 0 || null || undefined || "" || "JS");

/**
 * Toán tử gán:
 * =
 * +=
 * -=
 * *=
 * **=
 * /=
 * %=
 */

let i = 2;
i *= 3; // i = i + 1
console.log(i);

// String
const username = "hoangnm";
const adj = "Dep zai";
console.log(username.length);
console.log(username + " " + adj);
console.log(username.concat("@gmail.com"));

console.log(10 + "11");
console.log(10 - "11");
console.log(10 * "11");
console.log(10 / "11");

console.log("10" + 11);
console.log("10" - 11);
console.log("10" * 11);
console.log("10" / 11);

console.log(10 + "Hoang");
console.log(10 - "Hoang");
console.log(10 * "Hoang");
console.log(10 / "Hoang");

console.log("Hoang" + 10);
console.log("Hoang" - 10);
console.log("Hoang" * 10);
console.log("Hoang" / 10);

// NaN = Not a number

console.log(typeof "Hoang");
console.log(typeof 10);
console.log(typeof NaN);
console.log(typeof (100 / 0));
