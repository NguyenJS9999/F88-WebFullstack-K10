/**
 * Phương thức pop()
 * - Cắt 1 phần tử cuối mảng.
 * - Thay đổi mảng gốc.
 * - Trả về phần tử bị xoá
 */

const arr = ["Xuan", "Ha", "Thu", "Dong"];

console.log(arr.pop());
console.log(arr);

/**
 * push()
 * - Thay đổi mảng gốc
 * - Thêm 1 hoặc nhiều phần tử vào cuối mảng.
 * - Trả về độ dài mới của mảng
 */

console.log(arr.push("An", "Huy"));
console.log(arr);

/**
 * unshift()
 * - Thay đổi mảng gốc.
 * - Thêm phần tử vào đầu mảng.
 * - Trả về độ dài mới của mảng.
 */

console.log(arr.unshift("Long"));
console.log(arr);

/**
 * shift()
 * - Thay đổi mảng gốc
 * - Xoá phần tử đầu mảng.
 * - Trả về phần tử bị xoá
 */

console.log(arr.shift());
console.log(arr);
