/**
 * arr.reverse()
 * - đảo ngược mảng
 * - Thay đổi mảng gốc (nếu không muốn thay đổi mảng gốc thì dùng toReversed()).
 *
 */

const arr = ["Hoang", "Duy", "Hai Duong", "Dung"];

// const newArr = arr.slice(0).reverse();

// console.log(arr);
// console.log(newArr);

// const newArr2 = arr.toReversed();
// console.log(newArr2);

arr[10] = "Nhung";
console.log(arr);
arr.reverse();
console.log(arr);

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
