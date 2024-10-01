// console.log(Array.prototype);

// const arr = [1, 2, 3, 4, 5, 6, 10];

// const newArr = arr.slice();
// const newArr = arr.slice(1);
// const newArr = arr.slice(1, 3);
// const newArr = arr.slice(4, 1);

// Chỉ số âm
// console.log(arr);
// console.log(newArr);

/**
 * Slice
 * - Không thay đổi mảng gốc
 * - Trả về mảng mới
 * - Cú pháp: arr.slice(start, end): Lấy phần từ index = start đến ngay trước phần tử có index = end.
 * - Cho phép truyền chỉ số âm.
 * - Nếu start > end thì trả về mảng rỗng.
 */

/**
 * Splice
 * - Công thức: arr.splice(start, deleteCount, item1, item2, ...): Xóa `deleteCount` phần tử từ vị trí start, thêm item1, item2, ... vào vị trí start.
 * - Thay đổi mảng gốc.
 * - Nếu start < 0, thì tính cuối mảng, nếu start > arr.length thì thêm vào cuối mảng, nếu start < -arr.length thì thêm vào đầu mảng.
 * - deleteCount < 0 thì không xoá phần tử nào.
 */

// const arr = [0, 1, 2, 3, 4, 5, 6, 10];

// const newArr = arr.splice(1, -3, "Dung", "Giang", "Huy");
// console.log(arr);
// console.log(newArr);

/**
 * Những phương thức thay đổi mảng gốc thường là những phương thức biến đổi mảng: push, pop, shift, unshift, splice, reverse, sort...
 * Những phương thức không thay đổi mảng gốc thường là những phương thức truy xuất, tìm kiếm, duyệt qua mảng: forEach, map, filter, find, findIndex, indexOf, lastIndexOf, includes, some, every, reduce...
 */

const students = [
	{ id: 1, name: "hoang", score: 3 },
	{ id: 2, name: "son", score: 7 },
	{ id: 3, name: "duy", score: 6 },
	{ id: 4, name: "nhung", score: 10 },
	{ id: 5, name: "thuy", score: 2 },
	{ id: 6, name: "vu", score: 5 },
];

/** Từ danh sách sinh viên ban đầu, phân loại sinh viên thành 3 danh sách: excellen, medium , failed
 * - excellent: score >= 8
 * - medium: 5 >= score < 8
 * - còn lại: failed
 */

function groupByScore(arr) {
	const excellent = [];
	const medium = [];
	const failed = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].score >= 8) {
			excellent.push(arr[i]);
		} else if (arr[i].score < 5) {
			failed.push(arr[i]);
		} else {
			medium.push(arr[i]);
		}
	}

	return {
		excellent,
		medium,
		failed,
	};
}

// console.log(groupByScore(students));

function groupByScore2(arr) {
	const excellent = [];
	const failed = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].score >= 8) {
			console.log(arr[i]);
			excellent.push(arr[i]);
			arr.splice(i, 1); // sau khi thực hiện splice thì cần tăng i lên 1 để duyệt lại chính phần tử ở vị trí i,
			i--;
		} else if (arr[i].score < 5) {
			failed.push(arr[i]);
			arr.splice(i, 1);
			i--;
		} else {
			continue;
		}
	}
	return { excellent, failed, medium: arr };
}

console.log(groupByScore2(students));
