const employees = [
	{ id: 1, name: "Hoang", homeTown: "Hanoi" },
	{ id: 2, name: "An", homeTown: "Thaibinh" },
	{ id: 3, name: "Huy", homeTown: "Langson" },
	{ id: 4, name: "Dinh", homeTown: "Saigon" },
	{ id: 5, name: "Dong", homeTown: "Saigon" },
	{ id: 6, name: "Nhinh", homeTown: "Langson" },
	{ id: 7, name: "Tao", homeTown: "Danang" },
];

const result = employees.find((item, index) => {
	return item.homeTown === "Langson";
});

const result2 = employees.findLast((item, index) => {
	// console.log(item, index);
	return item.homeTown === "Langson";
});

const result3 = employees.findIndex((item, index) => {
	return item.homeTown === "Langson";
});

const result4 = employees.findLastIndex((item, index) => {
	return item.homeTown === "Langson";
});

// console.log(result);
// console.log(result);
// console.log(result3);
// console.log(result4);

/**
 * find trả về phần tử đầu tiên thoả mãn điều kiện.
 * findLast trả về phần tử cuối cùng của mảng thoả mãn điều kiện (thực chất findLast duyệt từ cuối mảng lên đầu mảng.)
 * findIndex trả về vị trí của phần tử đầu tiên thoả mãn điều kiện.
 * findLastIndex trả về vị trí của phần tử cuối cùng thoả mãn điều kiện.
 */

const result5 = employees.filter((item) => item.homeTown === "Danang");
console.log(result5);
