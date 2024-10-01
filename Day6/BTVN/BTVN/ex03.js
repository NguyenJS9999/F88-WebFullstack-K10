/**
 * Bài 3: Tính tổng giá trị đơn hàng

Viết hàm `calculateOrderTotal` nhận vào một mảng các đơn hàng, mỗi đơn hàng bao gồm `id`, `name`, `quantity`, `price`. Hàm trả về tổng giá trị của tất cả các đơn hàng.

**Lưu ý: Không dùng phương thức reduce**

```javascript
const orders = [
	{ id: "1", name: "A", quantity: 2, price: 100 },
	{ id: "2", name: "B", quantity: 1, price: 200 },
	{ id: "3", name: "C", quantity: 3, price: 300 },
];

// Output: 1300
 */

const orders = [
	{ id: "1", name: "A", quantity: 2, price: 100 },
	{ id: "2", name: "B", quantity: 1, price: 200 },
	{ id: "3", name: "C", quantity: 3, price: 300 },
];

function calculateOrderTotal(arr) {
	let total = 0;
	arr.forEach((item) => {
		total += item.price * item.quantity;
	});
	return total;
}

console.log(calculateOrderTotal(orders));
