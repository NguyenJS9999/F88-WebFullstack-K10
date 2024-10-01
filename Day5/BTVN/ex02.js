/**
 * Viết hàm phân loại nhân viên theo quê quán.

Viết hàm `groupByHomeTown` nhận vào một mảng nhân viên, trả về một object với key là quê quán, value là mảng nhân viên có quê quán đó.

**Lưu ý:** Chỉ sử dụng các phương thức đã được học.

**Input:**

```javascript
const employees = [
	{ id: 1, name: "Hoang", homeTown: "Hanoi" },
	{ id: 2, name: "An", homeTown: "Thaibinh" },
	{ id: 3, name: "Huy", homeTown: "Langson" },
	{ id: 4, name: "Dinh", homeTown: "Saigon" },
	{ id: 5, name: "Dong", homeTown: "Saigon" },
	{ id: 6, name: "Nhinh", homeTown: "Langson" },
];
```

**Output:**

```javascript
{
  Hanoi: [{id: 1, name: "Hoang", homeTown: "Hanoi"}],
  Thaibinh: [{id: 2, name: "An", homeTown: "Thaibinh"}],
  Langson: [
    {id: 3, name: "Huy", homeTown: "Langson"},
    {id: 6, name: "Nhinh", homeTown: "Langson"}
  ],
  Saigon: [
    {id: 4, name: "Dinh", homeTown: "Saigon"},
    {id: 5, name: "Dong", homeTown: "Saigon"}
  ]
}
```
 */

const employees = [
	{ id: 1, name: "Hoang", homeTown: "Hanoi" },
	{ id: 2, name: "An", homeTown: "Thaibinh" },
	{ id: 3, name: "Huy", homeTown: "Langson" },
	{ id: 4, name: "Dinh", homeTown: "Saigon" },
	{ id: 5, name: "Dong", homeTown: "Saigon" },
	{ id: 6, name: "Nhinh", homeTown: "Langson" },
];

function groupByHomeTown(arr) {
	// Bước 1: Tạo một object trống lưu trữ nhóm nhân viên sau phân loại
	const group = {};
	for (index in arr) {
		// Bước 2:
		// Duyệt qua từng phần tử
		// Lấy quê của phần tử thứ index
		let homeTown = arr[index].homeTown;
		if (!group[homeTown]) {
			//Bước 3: Kiểm tra nếu key 'quê quán' đã nằm trong group thì thôi, còn chưa thì thêm key-value với key là hometown và value là []
			group[homeTown] = [];
		}

		// Bước 4: Thêm phần tử theo đúng key là quê quán
		group[homeTown].push(arr[index]);
	}
	// Bước 5: Trả group ra ngoài
	return group;
}

console.log(groupByHomeTown(employees));
