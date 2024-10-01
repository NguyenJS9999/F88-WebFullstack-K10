/**
 * ## Bài 3: Sử dụng reduce để tính tổng tiền của một order

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

 */

const order = {
	id: 1,
	products: [
		{ id: 1, name: "Tivi", price: 10000, quantity: 1 },
		{ id: 2, name: "Tủ lạnh", price: 15000, quantity: 2 },
		{ id: 3, name: "Máy giặt", price: 8000, quantity: 4 },
		{ id: 4, name: "Điều hòa", price: 12000, quantity: 1 },
	],
};

const totalPrice = order.products.reduce((accumulator, item) => (accumulator += item.price * item.quantity), 0);
console.log(totalPrice);
