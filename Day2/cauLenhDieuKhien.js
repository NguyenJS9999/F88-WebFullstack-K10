// if (3 > 2) {
// 	console.log("3 thì lớn hơn 2");
// }

// let thoiTiet = "good";
// if (thoiTiet === "good") {
// 	console.log("Đi chơi");
// } else {
// 	console.log("Đi ngủ");
// }

// let a = 10;
// if (a > 0) {
// 	console.log("a là số dương");
// } else if (a < 0) {
// 	console.log("a là số âm");
// } else {
// 	console.log("a = 0 hoặc không phải là số");
// }

let myNumber = -99;
switch (Math.abs(myNumber % 2)) {
	case -1:
		console.log(`${myNumber} là số âm`);
	case 0:
		// in ra thông báo là số chẵn
		console.log(`${myNumber} là số chẵn`);
		break;
	case 1:
		// in ra thông báo là số lẻ
		console.log(`${myNumber} là số lẻ`);
		break;
	default:
		console.log("Không thể kết luận được!");
}

let thoiTiet = "good";

switch (thoiTiet) {
	case "good":
	case "normal":
		console.log("Di choi");
		break;
	case "bad":
		console.log("ở nhà");
		break;
	default:
		"Chưa thể quyết định";
}

/**
 * Khi nào dùng if-else:
 * 1. Ít trường hợp (từ 3 trường hợp đổ xuống)
 * 2. Không biết trước được giá trị cụ thể của từng trường hợp.
 * 3. Khi logic tính toán điều kiện trở nên phức tạp
 *
 * Khi nào dùng switch-case:
 * 1. Khi có nhiều tình huống có thể xảy ra
 * 2. Khi biết trước giá trị của từng trường hợp (case)
 * 3. Khi cần gộp các trường hợp
 */
