/**
Bài 2.1: Tạo một hàm register bằng js nhận vào nhiều tham số để khởi tạo ra một mảng chứa các đối tượng có cấu trúc như trên.

Yêu cầu:

Kiểm tra tất cả thông tin có đầy đủ không, nếu không đủ, báo lỗi và dừng chương trình.

Nếu đăng ký thêm một lần nữa, phải trả về được thông tin 2 người.

Tự động thêm role: "user" cho mỗi đối tượng.
*/

const users = [];
function register(name, password, email) {
	// Bước 1: dùng `if` để kiểm tra xem các thông tin nhập vào có đầy đủ không, nếu không đầy đủ thì báo lỗi và dừng chương trình.
	//
	// ! Code của học viên
	//
	// Bước 2: Nếu đăng ký thêm một lần nữa, phải trả về được thông tin 2 người, tự động thêm role cho đối tượng.
	users.push({ name, password, email, role: "user" });
	return users;
}

/**
2. 2. Tạo một hàm login nhận vào 2 tham số email và password.

Yêu cầu:

Nếu thông tin hợp lệ với một trong các đối tượng đã đăng ký, trả về thông tin của đối tượng đó.

Nếu không, báo cho người dùng rằng “Thông tin đăng nhập không hợp lệ”.
*/

function login(email, password) {
	// Dùng câu lệnh if kiểm tra xem email và password nhập vào có trùng email và password đã tồn tại trong users không?
	for (let i = 0; i < users.length; i++) {
		//! Học viên thêm logic để `return` user khớp cả email và password, với users[i] là phần tử có index là i của mảng users:
		console.log(users[i]);
	}
	// Nếu chạy xong vòng lặp mà không gặp từ khoá `return` tức là không tìm thấy user khớp với email và password đã đăng nhập thì thông báo: "Tài khoản không tồn tại!"
	return "Tai khoan khong ton tai!";
}

console.log(register("hoang", "12345", "hoangnm@gmail.com"));
console.log(register("an", "00000", "hoangan@gmail.com"));

console.log(login("hoangan@gmail.com", "00000"));
