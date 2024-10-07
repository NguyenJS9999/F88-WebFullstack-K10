/**
## Bài 4: Viết hàm đếm số ngày đến tết dương lịch
Viết hàm `countDownToNewYear` để đếm số ngày còn lại đến tết dương lịch từ thời điểm hiện tại. Hàm sẽ hiển thị số ngày còn lại.

*/

console.log("Còn", countDownToNewYear(), "ngày là tới tết dương lịch" );
function countDownToNewYear() {

	let today = new Date(); // Lấy thời gian hiện tại
	let newYear = new Date( today.getFullYear() + 1, 0 ) // Lấy thời gian tương lai là số năm hiện tại + 1, số tháng từ index 0
	let timeRemaining = newYear - today // mili giây

	return Math.floor( timeRemaining / ( 1000 * 60 * 60 * 24 ));
}


