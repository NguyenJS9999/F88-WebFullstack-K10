/**
## Bài 1: Viết hàm tính số ngày bạn đã sống
Viết hàm `calculateAge` nhận vào một tham số `birthday` là một chuỗi ngày tháng năm sinh dạng `dd/mm/yyyy` và trả về số ngày bạn đã sống.

*/

// Bài 1:
const brithdayInput = '22/02/1996'; // 22/02/1996
function calculateAge(parameter_birthday) {

	// Kiểm tra nhập rỗng
	if (!parameter_birthday) {
		return 'Ngày sinh không được để trống.';
	}

	// Tách bỏ dấu / chuỗi ngày, tháng, năm từ chuỗi đầu vào
	const parts = parameter_birthday.split(/[-\/]/);

	// Kiểm tra chuỗi đầu vào có đủ 3 phần (ngày, tháng, năm)
	if (parts.length !== 3) {
		return 'Định dạng ngày tháng năm sinh không hợp lệ. Định dạng đúng là dd/mm/yyyy hoặc dd-mm-yyyy.';
	}

	// Lấy các giá trị ngày, tháng, năm theo vị trí index
	const day = parseInt(parts[0], 10);
	const month = parseInt(parts[1], 10) - 1; // Tháng trong JS bắt đầu từ 0
	const year = parseInt(parts[2], 10);

	const birthDate = new Date(year, month, day);
	const currentDate = new Date();

	// Kiểm tra nếu ngày sinh nằm trong tương lai
	if (birthDate > currentDate) {
		return 'Ngày sinh không hợp lệ, không thể lớn hơn ngày hiện tại.';
	}

	// Tính số mili giây từ ngày sinh đến hiện tại
	const diffInMs = currentDate - birthDate;

	// Chuyển mili giây sang ngày
	const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

	return `Bài 1: Bạn đã sống được ${diffInDays} ngày.`;
}

console.log(calculateAge(brithdayInput));



// Bài 4:
function countDownToNewYear(parameter_countDownToNewYear) {
	console.log('Bài 4 countDownToNewYear: ', parameter_countDownToNewYear);
}
countDownToNewYear('22/02/1996');
