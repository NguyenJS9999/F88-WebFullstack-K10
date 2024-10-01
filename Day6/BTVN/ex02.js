const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

const newArr = arr.flat(2);
console.log(arr);
console.log(newArr);

/**
 * flat: làm phẳng mảng
 * - Không thay đổi mảng gốc
 * - Không truyền tham số thì mặc định chỉ làm phẳng 1 cấp.
 * - arr.flat(deepth): depth
 * - arr.flat(Infinity): Làm phẳng đến cấp sâu nhất.
 */

/**
 *
 */
