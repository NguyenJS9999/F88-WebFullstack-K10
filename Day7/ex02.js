/**map()
 * - array.map(callback) - callback là tham số bắt buộc.
 * - Không thay đổi mảng gốc
 * - Trả ra mảng mới.
 */

// const employees = [
// 	{ id: 1, name: "Hoang", homeTown: "Hanoi", gender: "male" },
// 	{ id: 2, name: "An", homeTown: "Thaibinh", gender: "male" },
// 	{ id: 3, name: "Huy", homeTown: "Langson", gender: "male" },
// 	{ id: 4, name: "Dinh", homeTown: "Saigon", gender: "male" },
// 	{ id: 5, name: "Dong", homeTown: "Saigon", gender: "" },
// 	{ id: 6, name: "Nhinh", homeTown: "Langson", gender: "female" },
// 	{ id: 7, name: "Tao", homeTown: "Danang", gender: "male" },
// ];

// const newArr = employees.map((item, index) => {
// 	item.description = "Sơ yếu lí lịch";
// 	return item;
// });

// console.log(newArr);

// const arr = [1, 2, 3, 4, 5, 10];
// Sử dụng phương thức map() để x5 lần giá trị mỗi phần tử của mảng arr và trả mảng mới arrx5

// arrx5 = [5, 10, 15, 20, 25, 50]

// const arrx5 = arr.map((item) => item * 5);
// console.log(arrx5);

/**
 * Hiển thị ra màn hình danh sách sản phẩm theo giao diện có sẵn.
 */

const products = [
	{
		id: 1,
		name: "Iphone 16 promax",
		description: "Mo ta",
		thumbnail:
			"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png",
		price: 3000,
	},
	{
		id: 2,
		name: "Iphone 15 promax",
		description: "Mo ta",
		thumbnail:
			"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png",
		price: 2000,
	},
	{
		id: 3,
		name: "Iphone 14 promax",
		description: "Mo ta",
		thumbnail:
			"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png",
		price: 1800,
	},
	{
		id: 4,
		name: "Iphone 13 promax",
		description: "Mo ta",
		thumbnail:
			"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png",
		price: 1500,
	},
];

/**
 *<div class="product-card">
			<h2>San pham A</h2>
			<p>Description:</p>
			<p class="price">Price:</p>
	</div>
 */
const content = products
	.map((item) => {
		let itemContent = `
  <div class="product-card">
      <img src="${item.thumbnail}" width="200" />
			<h2>${item.name}</h2>
			<p>Description: ${item.description}</p>
			<p class="price">Price: ${item.price}</p>
	</div>
  `;
		return itemContent;
	})
	.join("");

console.log(content);

document.write(content);
