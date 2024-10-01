/**
 * Spress oprerator
	- Dùng để nối, gộp mảng hoặc Object.
	- DÙng để copy mảng hoặc Object hoặc sao chép nông


	Ngoài: Nông là copy mặt ngoài sâu cấp thì ko dc nữa
*
*/

const student1 = ["Nam", "Huy", "Long"]
const student2 = ["Den", "Binz"]

const student3 = student1.concat(student2);
console.log(student3);

const student4 = [...student2, "Hoang", ...student1];
console.log(student4);

const student1Copy = [...student1]

const myAcount = {
	email: 'Hoang@gmail.com',
	password: '123455789',
}

const myInfor = {
	fridentList: [],
	skill: [],
	adress: 'HN',
	linkCV: 'http://cv.abc.vn',
	
}

const myInformation = {
	...myAcount,
	...myInfor,
}

console.log(myInformation);

/**
 * Phân biệt spread và rest
 * Rest:
 * Chỉ có tác dụng ở cuổi dùng của một khai báo,
 * Có tác dụng gom phần còn lại.
 * - Resi sử dụng khai báo tham số cho hàm.
 *
 * Spread
 * - Để ải các phần tử hoặc cắc cặp key: value của array/object mới.
 *
* */


