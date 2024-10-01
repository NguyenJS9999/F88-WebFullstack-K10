// const isAlert = alert("Đây là một thông báo!");

// console.log(isAlert);
// const isConfirm = confirm("Đây là một thông tin cần xác nhận!");
// console.log(isConfirm);

// const isPromp = prompt("Bạn tên gì?");
// console.log(isPromp);
// console.log("1111");

/**
 * Ý nghĩa của hàm:
 * 1. Tính tái sử dụng code.
 * 2. Tạo ra những phạm vi biến cục bộ, an toàn, dễ bảo trì.
 * 3. Đóng gói logic tính toán để dễ quản lý.
 */

/**
 * Function trong JS:
 * 1. Declaration Function
 * 2. Expression Function (không dùng được trước khi khai báo)
 * 3. Arrow function
 * 4. Anonymous function
 */

/**
 * `return` dùng để trả về kết quả tính toán của hàm.
 * `return` để dừng chương trình thực hiện trong hàm.
 */

// function sum(a, b) {
// 	// console.log("alo");
// 	const username = "Hoang";
// 	return a + b;
// 	// do something
// 	// console.log("alo");
// }

// function Hello() {
// 	const username = "An";
// 	console.log(username);
// }

// console.log(sum(100, 200));
// console.log(sum(100, 300));
// console.log(sum(100, 2));
// console.log(sum(100, -50));

// const hello = function (name) {
// 	console.log("Xin chao ban ", name);
// };
// hello("Mr Been");
// hello("Đen Vâu");
// hello("cả lớp");

/**
 * TODO: Tạo hàm nhập vào số nguyên dương n bất kỳ, kiểm tra tính chẵn lẻ của số đó.
 */

// const myNumber = prompt("Xin mời nhập vào số nguyên dương bất kỳ");

// kiemTraChanLe(myNumber);

// const kiemTraChanLe = function (n) {
// 	// kiểm tra xem n là số chẵn hay lẻ và thông báo ra ngoài màn hình.
// 	// logic của bạn
// 	const result = n % 2;
// 	if (result === 0) {
// 		alert(`${n} là số chẵn`);
// 	} else {
// 		alert(`${n} là số lẻ`);
// 	}
// };

// kiemTraChanLe(myNumber);

// const sum1 = (a, b) => {
// 	console.log(a);
// 	console.log(b);
// 	return a + b;
// };

// const sum2 = (a, b) => a + b;
// const sum3 = (a, b) => {
// 	console.log(a + b);
// };

// console.log(sum1(1, 2));
// console.log(sum2(10, 20));
// sum3(100, 200);

/**
 * TODO: Viết hàm nhập vào chiều cao, cân nặng, in ra chỉ số cơ thể BMI và thông tin góp ý: bạn hơi thừa cân, thiếu cân hoặc cân đối.
 * BMI = cân nặng(kg) / (chiều cao * chiều cao(m))
 * Biết rằng:
 * BMI <=18 -> Thiếu cân
 * BMI > 18 && BMI < 24 -> Cân đối
 * BMI >=24 -> Thừa cân
 */

// Bước 1: Viết hàm calcBMI()
// Bước 2: dùng promt để ghi nhận chiều cao, cân nặng.
// Bước 3: Tính toán
// Bước 4: So sánh, if else...

// const chieuCao = prompt("Nhập vào chiều cao của bạn?");
// const canNang = prompt("Nhập vào cân nặng của bạn?");
// function calcBMI(chieuCao, canNang) {
// 	let BMI = canNang / chieuCao ** 2;
// 	console.log(BMI);
// 	if (BMI <= 18) {
// 		alert(`BMI của bạn là ${BMI}, bạn hơi gầy`);
// 	} else if (BMI >= 24) {
// 		alert(`BMI của bạn là ${BMI}, bạn hơi thừa cân`);
// 	} else {
// 		alert(`BMI của bạn là ${BMI}, chúc mừng bạn có một cơ thể cân đối!`);
// 	}
// }
// calcBMI(chieuCao, canNang);

// setTimeout(() => {
// 	console.log("Xin chao ca lop!");
// 	alert("Xin chao ca lop!");
// }, 4000);

// setInterval(() => {
// 	console.log("Xin chao ca lop!");
// 	// alert("Xin chao ca lop!");
// }, 1000);
