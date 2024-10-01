## Bài 1: Viết hàm đảo ngược mảng ban đầu

Lưu ý: Không được sử dụng phương thức `reverse`.

**Input:**

```javascript
const numbers = [1, 2, 3, 4, 5];
```

**Output:**

```javascript
[5, 4, 3, 2, 1];
```

## Bài 2: Viết hàm phân loại nhân viên theo quê quán.

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

## Bài 3: Viết hàm xử lý tên sản phẩm thành slug.

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
