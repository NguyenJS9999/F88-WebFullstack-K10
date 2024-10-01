/**
 * ## Bài 2: Làm sạch dữ liệu

- Có một raw data (dữ liệu thô) về users chưa được làm sạch, bạn cần duyệt qua mảng dữ liệu này với tên không được mang giá trị `falsy` (`0, '', null, undefined, NaN`) và tuổi không được mang giá trị `falsy` + không được là số âm.
- Vi phạm một trong 2 điều kiện trên thì sẽ bị loại khỏi mảng gốc và thêm vào một mảng mới với tên là `invalidData`.

```javascript
const datas = [
	{ name: "Alice", age: 20 },
	{ name: "Bob", age: 0 },
	{ name: "Carol", age: -1 },
	{ name: "David", age: null },
	{ name: "Eve", age: NaN },
	{ name: "Frank", age: undefined },
	{ name: "", age: 20 },
];

// Output:

const validData = [{ name: "Alice", age: 20 }];

const invalidData = [
	{ name: "Bob", age: 0 },
	{ name: "Carol", age: -1 },
	{ name: "David", age: null },
	{ name: "Eve", age: NaN },
	{ name: "Frank", age: undefined },
	{ name: "", age: 20 },
];
```
 */

const datas = [
	{ name: "Alice", age: 20 },
	{ name: "Bob", age: 0 },
	{ name: "Carol", age: -1 },
	{ name: "David", age: null },
	{ name: "Eve", age: NaN },
	{ name: "Frank", age: undefined },
	{ name: "", age: 20 },
];

const validData = [];
const invalidData = [];

datas.forEach((item) => {
	if (item.name && item.age && item.age > 0) {
		validData.push(item);
	} else {
		invalidData.push(item);
	}
});
console.log({ validData, invalidData });
