/**
	## Bài 2: Viết hàm hiển thị thời gian hiện tại ở màn console sau mỗi giây.
	Viết hàm `showTime` để hiển thị thời gian hiện tại sau mỗi một giây.
*/

// Bài 2:
function showTime() {
	// Lấy thời gian hiện tại
	const timeNow = new Date();

	// Lấy giờ, phút, giây hiện tại
	// padStart thêm các ký tự vào đầu của một chuỗi cho tới khi đạt được độ dài mong muốn 2 giờ -> 02, 10 thì vẫn là 10
	const hours = timeNow.getHours().toString().padStart(2, '0');
	const minutes = timeNow.getMinutes().toString().padStart(2, '0');
	const seconds = timeNow.getSeconds().toString().padStart(2, '0');


	// console.log("hours: ", hours);
	// Hiển thị thời gian với định dạng HH:MM:SS
	console.log(`Bài2: ${hours}:${minutes}:${seconds}`);
}

// Cập nhật và hiển thị thời gian mỗi 1 giây
setInterval(showTime, 1000);
