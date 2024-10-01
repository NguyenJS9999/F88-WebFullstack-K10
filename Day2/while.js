// let i = 0;

// while (i <= 10) {
// 	// Việc thay đổi bước nhảy phụ thuộc vào bài toán cụ thể, không nhất thiết phải tăng giá trị i mỗi lần. -> While loop dành cho bài toán không biết trước số lần lặp.
// 	console.log(i);
// 	i++;
// }

/**Khi nào dùng vòng lặp nào?
 * 1. for:
 *  - Sử dụng khi biết trước số lần lặp.
 *  - Sử dụng khi biết trước điều kiện dừng.
 *  - Thường được sử dụng với bài toán số học hoặc mảng.
 *
 * 2. while:
 * - Sử dụng khi không biết trước số lần lặp.
 * - Sử dụng khi không biết trước điều kiện dừng.
 * - Dùng while để đọc dữ liệu.
 *
 * 3. do...while:
 * - Giống while nhưng luôn thực hiện tối thiểu 1 lần lặp.
 */

let i = 0;
do {
	console.log(i);
	i++;
} while (i < -100);

/** Các bước thực hiện trong do...while
 * 1. Thực hiện câu lệnh trong do.
 * 2. Kiểm tra điều kiện trong while.
 * 3. Nếu điều kiện đúng, quay lại bước 1.
 * 4. Nếu điều kiện sai thì thực hiện khối lệnh trong do trước khi kết thúc.
 */
