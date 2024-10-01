/**
 * Bài 3: Viết hàm xử lý tên sản phẩm thành slug.

Bạn có một mảng các sản phẩm, mỗi sản phẩm bao gồm `id` và `name`. Yêu cầu là viết một hàm `slugify` để trả về một mảng mới, trong đó mỗi sản phẩm có thêm thuộc tính `slug`. Thuộc tính `slug` sẽ bao gồm tên sản phẩm được chuẩn hóa theo các bước:

1. Tất cả các chữ cái viết thường.
2. Không có khoảng trắng, thay thế khoảng trắng bằng dấu gạch ngang (-).
3. Nối với `id` của sản phẩm, `id` cũng được chuyển về chữ thường.

**Lưu ý:** Chỉ sử dụng các phương thức đã được học.

**Input:**

```javascript
const products = [
	{ id: "1OT22W006", name: "Girls Windbreaker Jacket" },
	{ id: "1OT22W009", name: "Boys T-shirt" },
	{ id: "1OT22W032", name: "Boys Shirt" },
	{ id: "1OT22W011", name: "Men's Super Warm Jacket" },
	{ id: "1OT22W000", name: "Women's Party Dress" },
];
```

**Output:**

```javascript
[
	{ id: "1OT22W006", name: "Girls Windbreaker Jacket", slug: "girls-windbreaker-jacket-1ot22w006" },
	{ id: "1OT22W009", name: "Boys T-shirt", slug: "boys-t-shirt-1ot22w009" },
	{ id: "1OT22W032", name: "Boys Shirt", slug: "boys-shirt-1ot22w032" },
	{ id: "1OT22W011", name: "Men's Super Warm Jacket", slug: "mens-super-warm-jacket-1ot22w011" },
	{ id: "1OT22W000", name: "Women's Party Dress", slug: "womens-party-dress-1ot22w000" },
];
```
*/

const products = [
	{ id: "1OT22W006", name: "Girls Windbreaker Jacket" },
	{ id: "1OT22W009", name: "Boys T-shirt" },
	{ id: "1OT22W032", name: "Boys Shirt" },
	{ id: "1OT22W011", name: "Men's Super Warm Jacket" },
	{ id: "1OT22W000", name: "Women's Party Dress" },
];

// Bước 1: tạo hàm createSlug nhận vào sản phẩm, trả ra sản phẩm đã được thêm slug.
// Bước 2: tạo hàm slugify nhận vào mảng sản phẩm, sử dụng hàm createSlug trong vòng lặp để biến đổi từng sản phẩm. Thêm sản phẩm sau biến đổi vào một mảng mới và trả ra mảng mới đó sau khi xong vòng lặp.

function createSlug(product) {
	let { name, id } = product;
	name = name.toLowerCase();
	let slug = "";
	for (let i = 0; i < name.length; i++) {
		// Cach 1
		// if (name[i] === " ") {
		// 	slug += "-";
		// } else if (name[i] === "'") {
		// 	continue;
		// } else {
		// 	slug += name[i];
		// }

		// Cach 2:
		switch (name[i]) {
			case " ":
				slug += "-";
				break;
			case "'":
				continue;
			default:
				slug += name[i];
		}
	}

	slug = slug + "-" + id.toLowerCase();
	product.slug = slug;
	return product;
}

// console.log(createSlug({ id: "1OT22W000", name: "Women's Party Dress" }));

function slugify(arr) {
	const newArr = [];
	for (index in arr) {
		newArr.push(createSlug(arr[index]));
	}
	return newArr;
}

console.log(slugify(products));
