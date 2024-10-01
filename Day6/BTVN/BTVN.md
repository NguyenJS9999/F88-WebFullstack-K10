## Bài 1: Tìm sản phẩm theo tên

Từ màn hình nhập vào cửa sổ prompt chuỗi bất kỳ. Viết chương trình in ra màn hình các sản phẩm có tên chứa chuỗi vừa nhập (Không kể chữ in hoa hay chữ in thường).

Cho trước mảng sản phẩm:

```javascript
const products = [
	{ id: "1OT22W006", name: "Girls Windbreaker Jacket" },
	{ id: "1OT22W009", name: "Boys T-shirt" },
	{ id: "1OT22W032", name: "Boys Shirt" },
	{ id: "1OT22W011", name: "Men's Super Warm Jacket" },
	{ id: "1OT22W000", name: "Women's Party Dress" },
];

// Output:

// Nếu nhập chuỗi "jacket" cần in ra màn hình sản phẩm { id: "1OT22W006", name: "Girls Windbreaker Jacket" } và sản phẩm { id: "1OT22W011", name: "Men's Super Warm Jacket" }.
```

## Bài 2: Làm sạch dữ liệu

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

## Bài 3: Tính tổng giá trị đơn hàng

Viết hàm `calculateOrderTotal` nhận vào một mảng các đơn hàng, mỗi đơn hàng bao gồm `id`, `name`, `quantity`, `price`. Hàm trả về tổng giá trị của tất cả các đơn hàng.

**Lưu ý: Không dùng phương thức reduce**

```javascript
const orders = [
	{ id: "1", name: "A", quantity: 2, price: 100 },
	{ id: "2", name: "B", quantity: 1, price: 200 },
	{ id: "3", name: "C", quantity: 3, price: 300 },
];

// Output: 1300
```
