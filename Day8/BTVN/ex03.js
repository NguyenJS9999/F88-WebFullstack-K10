/**


## Bài 3: Viết hàm đếm ngược thời gian
Viết hàm `countDown` nhận vào một tham số `time` là một số nguyên dương đại diện cho số giây cần đếm ngược. Hàm sẽ đếm ngược thời gian từ `time` về 0 và hiển thị các thời gian còn lại (tính theo giây) ở màn hình console sau mỗi giây.

*/

// Bài 3:

countDown('100');

function countDown(time) {
	// Kiểm tra nếu tham số nhập vào không phải là số nguyên dương
	if (isNaN(time) || time < 0) {
		console.log('Vui lòng nhập một số nguyên dương hợp lệ.');
		return;
	}

	// Lấy độ dài của chuỗi là số thời gian, Chuyển số thành chuỗi
	const numberString = time.toString();

	// Đếm số ký tự trong chuỗi
	const lengthOfString = numberString.length;

	const timer = setInterval(() => {
		// Chuyển số đã giảm xong thành kí tự 0
		const timeLast = time.toString().padStart(lengthOfString, '0');

		console.log('lengthOfString ', typeof lengthOfString);
		// Hiển thị thời gian còn lại
		console.log(`Thời gian còn lại: ${timeLast} giây`);

		// Giảm thời gian số giây đi 1
		time--;

		// Khi thời gian còn lại bằng 0, dừng lại
		if (time === 0) {
			clearInterval(timer);
			console.log('Hết thời gian!');
		}
	}, 1000);
}
