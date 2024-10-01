## Bài 1: Sắp xếp danh sách học viên theo tên

**Yêu cầu cụ thể:**

- Sắp xếp danh sách học viên theo thứ tự bảng chữ cái.
- Nếu tên học viên trùng nhau thì sắp xếp theo tên đệm và họ.
- Nếu cả tên, họ và tên đệm đều trùng nhau thì để theo thứ tự mặc định.
- In ra danh sách học viên sau khi đã sắp xếp (console.log).

```javascript
// Input:
const students = [
	{ id: 1, name: "Nguyen Manh Huy", age: 18 },
	{ id: 2, name: "Nguyen Thanh An", age: 18 },
	{ id: 3, name: "Phan Tuan Manh", age: 18 },
	{ id: 4, name: "Nguyen Truong Giang", age: 15 },
	{ id: 5, name: "Tran Ngoc Duy", age: 18 },
	{ id: 6, name: "Hoang Thanh Huy", age: 18 },
	{ id: 7, name: "Nguyen The Han", age: 18 },
	{ id: 8, name: "Le Huu Trong", age: 17 },
	{ id: 9, name: "Vu Quoc Dung", age: 18 },
	{ id: 10, name: "Nguyen Hai Duong", age: 18 },
	{ id: 11, name: "Nguyen Trung Hieu", age: 18 },
	{ id: 12, name: "Tran Duy Dong", age: 18 },
	{ id: 13, name: "Tran Minh Hoang", age: 18 },
	{ id: 14, name: "Nguyen Minh Hoang", age: 18 },
	{ id: 15, name: "Nhung", age: 18 },
	{ id: 16, name: "Nguyễn Nhung", age: 18 },
];
```

```javascript
// Output:
[
	{ id: 2, name: "Nguyen Thanh An", age: 18 },
	{ id: 12, name: "Tran Duy Dong", age: 18 },
	{ id: 9, name: "Vu Quoc Dung", age: 18 },
	{ id: 10, name: "Nguyen Hai Duong", age: 18 },
	{ id: 5, name: "Tran Ngoc Duy", age: 18 },
	{ id: 4, name: "Nguyen Truong Giang", age: 15 },
	{ id: 7, name: "Nguyen The Han", age: 18 },
	{ id: 11, name: "Nguyen Trung Hieu", age: 18 },
	{ id: 14, name: "Nguyen Minh Hoang", age: 18 },
	{ id: 13, name: "Tran Minh Hoang", age: 18 },
	{ id: 6, name: "Hoang Thanh Huy", age: 18 },
	{ id: 1, name: "Nguyen Manh Huy", age: 18 },
	{ id: 3, name: "Phan Tuan Manh", age: 18 },
	{ id: 15, name: "Nhung", age: 18 },
	{ id: 16, name: "Nguyễn Nhung", age: 18 },
	{ id: 8, name: "Le Huu Trong", age: 17 },
];
```

## Bài 2: Dùng chính kết quả sau khi đã sắp xếp ở bài 1 để hiển thị thông tin ra màn hình với các yêu cầu sau:

- Sử dụng phương thức `map()` để tạo ra một mảng mới chứa thông tin của học viên nhưng tên của học viên được viết hoa.
  - Ví dụ: "Nguyen Thanh An" -> "NGUYEN THANH AN".
- Với những học viên có tuổi dưới 18, thêm thuộc tính "isUnderage" với giá trị là `true`, còn lại học viên từ đủ 18 tuổi trở lên thì thuộc tính "isUnderage" có giá trị là `false`.
- Đưa toàn bộ thông tin của học viên ra màn hình (bao gồm id, name, age).
- Với những học viên có tuổi dưới 18 tuổi thì giá trị tuổi được tô màu đỏ và in đậm.

## Bài 3: Sử dụng reduce để tính tổng tiền của một order

**Yêu cầu cụ thể:**

- Tính tổng tiền của một `order` dựa trên thông tin của các sản phẩm và gán vào thuộc tính `totalPrice` của `order`.

```javascript
// Input:
const order = {
	id: 1,
	products: [
		{ id: 1, name: "Tivi", price: 10000, quantity: 1 },
		{ id: 2, name: "Tủ lạnh", price: 15000, quantity: 2 },
		{ id: 3, name: "Máy giặt", price: 8000, quantity: 4 },
		{ id: 4, name: "Điều hòa", price: 12000, quantity: 1 },
	],
};
```

```javascript
// Output:
{
  id: 1,
  products: [
    { id: 1, name: "Tivi", price: 10000, quantity: 1 },
    { id: 2, name: "Tủ lạnh", price: 15000, quantity: 2 },
    { id: 3, name: "Máy giặt", price: 8000, quantity: 4 },
    { id: 4, name: "Điều hòa", price: 12000, quantity: 1 },
  ],
  totalPrice: 84000
};
```
