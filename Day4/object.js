// Object là kiểu dữ liệu mô tả 1 thực thể.
// const product = {
// 	title: "Iphone 16 promax",
// 	price: 2000,
// 	"iphone color": "titan",
// 	ram: "6GB",
// 	description: "An product by Apple...",
// 	rate: 5,
// 	comment: "very good",
// };

// console.log(product["iphone color"]);

// const userInfor = {
// 	username: "hoangnm",
// 	age: 18,
// };

// const product2 = {
// 	id: 1,
// 	title: "Essence Mascara Lash Princess",
// 	description:
// 		"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
// 	category: "beauty",
// 	price: 9.99,
// 	discountPercentage: 7.17,
// 	depth: 28.01,
// };

// const title = product2.title
// const price = product2.price

// const { title, price, ...rest } = product2;
// console.log(title, price);
// console.log("rest: ", rest);

// rest: Phần còn lại của object, array.

// for (key in product2) {
// 	// console.log(`${key}: ${product2[key]}`);

// 	document.write(`<p>${key}: ${product2[key]} </p>`);
// }

// const myInfor = {
// 	name: "Nguyen Van A",
// };

// const myString = "Nguyen Van A";
// console.log(myString[0]);
// myString[0] = "H";
// console.log(myString);

const product = {
	id: 1,
	title: "Essence Mascara Lash Princess",
	description:
		"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
	categoryId: 1,
	price: 9.99,
	discountPercentage: 7.17,
	depth: 28.01,
};

const category1 = {
	id: 1,
	name: "beauty",
	slug: "beauty",
	desc: "description...",
};

const categories = [
	{
		id: 1,
		name: "beauty",
		desc: "abd",
		slug: "beauty",
	},
	{
		id: 2,
		name: "foods",
		desc: "abd",
		slug: "foods",
	},
	{
		id: 3,
		name: "tech",
		desc: "abd",
		slug: "tech",
	},
];

// product.categoryId = category1.name;
// console.log(product);

// Object.keys()
// Object.values()
// for...in

// const keys = Object.keys({
// 	id: 1,
// 	name: "beauty",
// 	desc: "abd",
// 	slug: "beauty",
// });

for (let key in Object.keys(categories)) {
	console.log(key);
	if (categories[key].id == product.categoryId) {
		// product.categoryId = categories[key].name;
		product.categoryName = categories[key].name;
	}
}

const whiteList = Object.freeze({});

const successMessage = Object.freeze({
	CREATE_SUCCESS: "tạo mới thành công!",
	CANCEL_SUCCESS: "huỷ thành công!",
});
successMessage.CREATE_SUCCESS = "Noi dung bi thay doi!";
console.log(successMessage);
