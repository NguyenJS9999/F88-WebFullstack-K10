/**
 * sort()
 * - sort(callback) - callback là tham số không bắt buộc.
 * - callback (a, b) => {}
 * - phương thức sort() chuyển đổi dữ liệu về dạng chuỗi và so sánh chuỗi để sắp xếp.
 * -
 */

// const arr = [1, 2, 5, 22, 3, 10, 4, 7];

// arr.sort((a, b) => {
// 	// console.table({ a, b, "a-b": a - b });
// 	return b - a;
// });

// console.log(arr);
const brands = ["Samsung", "Apple", "Oppo", "oppo", "Xiaomi", "Huawei", "Nokia", "Bphone"];
brands.sort((a, b) => {
	// console.log({ a, b });
	if (a > b) {
		return 1;
	} else if (a < b) {
		return -1;
	} else {
		return 0;
	}
});
// console.log(brands);

// console.log("samsung" > "apple");
// a -> z

const students = [
	"Nguyen Manh Huy",
	"Nguyen Thanh An",
	"Phan Tuan Manh",
	"Nguyen Truong Giang",
	"Tran Ngoc Duy",
	"Hoang Thanh Huy",
	"Nguyen The Han",
	"Le Huu Trong",
	"Vu Quoc Dung",
	"Nguyen Hai Duong",
	"Nguyen Trung Hieu",
	"Tran Duy Dong",
	"Tran Minh Hoang",
	"Nguyen Minh Hoang",
	"Nhung",
	"Nguyễn Nhung",
];

/**
 * Sắp xếp danh sách học viên theo thứ tự bảng chữ cái theo yêu cầu sau.
 * 1. Sắp xếp theo tên của học viên.
 * 2. Nếu 2 học viên có trùng tên, sắp xếp theo họ và tên.
 */

/**
 * B1: Tạo vòng lặp.
 * B2: Tách chuỗi ra thành mảng theo ký tự dấu cách " " và lấy phần tử cuối. (Có thể dùng slice hoặc splice).
 * B3: So sánh tên.
 * B4: Nếu tên bằng nhau, lấy phần còn lại (họ và tên đệm) để so sánh tiếp.
 *
 */

const result = students.sort((a, b) => {
	const nameA = a.split(" ").slice(-1);
	const nameB = b.split(" ").slice(-1);
	console.log({ nameA, nameB });
	if (nameA > nameB) {
		return 1;
	} else if (nameA < nameB) {
		return -1;
	} else {
		// so sánh tiếp họ và tên đệm
		const familyNameA = a.split(" ").slice(0, -1).join(" ");
		const familyNameB = b.split(" ").slice(0, -1).join(" ");
		console.log({ familyNameA, familyNameB });
		// if...else
		// BTVN.
	}
});
