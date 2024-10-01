/*
Viết 1 hàm trả về 1 đối tượng có 3 thuộc tính: name, age, address

Sau đó viết một hàm nhận vào một mảng chứa nhiều đối tượng để khởi tạo ra một mảng mới chứa các đối tượng có cấu trúc như trên.

Kết quả trả về là một mảng chứa tất cả thông tin của các đối tượng đó được sắp xếp tăng dần theo tuổi và thêm một thuộc tính mới là shortName của mỗi đối tượng.

Lưu ý: Không được sử dụng phương thức sort() có sẵn của Array.
*/

function createCustomers(customers) {
	for (let i = 0; i < customers.length - 1; i++) {
		// Với mỗi giá trị của i, ta có j chạy từ 0 đến giá trị customers.length - i - 1 vì lúc này những đối tượng có tuổi lớn nhất đã được sắp xếp ở cuối mảng.
		for (let j = 0; j < customers.length - i - 1; j++) {
			console.log("i: ", i);
			console.log(`customers_${i}: `, customers[i]);
			if (customers[j].age > customers[j + 1].age) {
				// Hoán đổi vị trí nếu tuổi của phần tử trước lớn hơn phần tử sau
				console.log("j: ", j);
				console.log(`customers_${j}: `, customers[j]);
				console.log(`customers_${j + 1}: `, customers[j + 1]);
				// ! Học viên tiếp tục hoàn thành logic hoán đổi vị trí 2 đối tượng có index j và j+1.
			}
		}
	}
	return customers;
}

const customers = [
	{ name: "Nguyễn Văn A", age: 30, address: "Ha Noi" },
	{ name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
	{ name: "Nguyễn Văn C", age: 4, address: "Quang Ninh" },
	{ name: "Nguyễn Văn D", age: 12, address: "TP.HCM" },
	{ name: "Nguyễn Văn E", age: 6, address: "Bac Giang" },
];

const result = createCustomers(customers);

console.log(result);
