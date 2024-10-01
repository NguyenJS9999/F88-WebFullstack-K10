// Làm việc giữa chuỗi và mảng.

// let str = "Hello, F8!";

// let paragraph = "Xin chao ca lop. Hoc JS khong kho!";

// const arr = paragraph.split(". ");
// console.log(arr);
// const arr = ["Xin chao ca lop.", "Hoc JS khong kho!", "Thật ra JS cũng hơi hơi khó"];
// const newStr = arr.join("@@");
// const newStr1 = arr.join();
// console.log(newStr1);
// Nếu dùng join() không truyền tham số thì mặc định ký tự nối là dấu ","

// Dùng kiến thức đã học về chuỗi và mảng để đưa một mảng các đoạn văn thành chuỗi, mỗi câu được bọc bởi cặp thẻ <p></p>.
// console.log(newStr);
// Output: <p>Xin chao ca lop.</p><p>Hoc JS khong kho!</p>

/**
 * Bước 1: Dùng `join("</p><p>")` để tạo ra chuỗi.
 * Bước 2: Hoàn thiện chuỗi với các phương pháp nối chuỗi.
 */

// let str = arr.join("</p><p>");
// console.log(str);

// str = "<p>" + str + "</p>";
// console.log(str);

let username = "nguyEn mINH hOAng";
// Output: Nguyen Minh Hoang
/**
 * Bước 1: Phân tách chuỗi thành một mảng, mỗi phần tử là 1 từ, phân tách bởi dấu cách.
 * Bước 2: Tạo vòng lặp duyệt qua mảng, với mỗi phần tử của mảng, in hoa chữ đầu, in thường phần còn lại của từ. Nối 2 phần lại với nhau.
 * Bước 3. Nối lại càng phần tử của mảng sau khi xử lỷ để thành chuỗi.
 */

function capitalizeName(str) {
	// Bước 1: Phân tách chuỗi đầu vào thành mảng và tạo vòng lặp
	const arr = str.split(" ");
	for (index in arr) {
		// Bước 2: Với mỗi phần tử arr[index], in hoa chữ cái đầu, in thường phần còn lại.
		arr[index] = arr[index][0].toUpperCase() + arr[index].slice(1).toLowerCase();
	}
	console.log(arr);

	// Bước 3: nối các phần tử của arr thành chuỗi và trả ra ngoài.
	return arr.join(" ");
}

console.log(capitalizeName(username));
