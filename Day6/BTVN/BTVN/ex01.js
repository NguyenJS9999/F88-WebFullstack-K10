/**
 * ! ## Bài 1: Tìm sản phẩm theo tên

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
 */

const products = [
	{ id: "1OT22W006", name: "Girls Windbreaker Jacket" },
	{ id: "1OT22W009", name: "Boys T-shirt" },
	{ id: "1OT22W032", name: "Boys Shirt" },
	{ id: "1OT22W011", name: "Men's Super Warm Jacket" },
	{ id: "1OT22W000", name: "Women's Party Dress" },
];

const query = prompt("Nhap ten san pham?").toLowerCase();

const result = products.filter((item) => {
	// console.log({ query, item });
	return item.name.toLowerCase().includes(query);
});
console.log(result);

let content = "";
result.forEach((item) => {
	content += `<h2>${item.name}</h2><p>id: ${item.id}</p>`;
});

document.write(content);
