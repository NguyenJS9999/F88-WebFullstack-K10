/**
 * Viết hàm đảo ngược mảng ban đầu

Lưu ý: Không được sử dụng phương thức `reverse`.

**Input:**

```javascript
const numbers = [1, 2, 3, 4, 5];
```

**Output:**

```javascript
[5, 4, 3, 2, 1];
```
 */

// Cach 1: lần lượt lấy phần tử ở đầu mảng cũ đưa vào đầu mảng mới.
// Cách 2: lần lượt lấy phần tử ở cuối mảng cũ đưa vào cuối mảng mới.

const numbers = [1, 12, 13, 4, 5];
function myReverse(arr) {
	const newArr = [];
	for (index in arr) {
		newArr.unshift(arr[index]);
	}
	return newArr;
}

function myReverse2(arr) {
	const newArr = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		newArr.push(arr[i]);
	}
	return newArr;
}
console.log(myReverse(numbers));
console.log(myReverse2(numbers));
