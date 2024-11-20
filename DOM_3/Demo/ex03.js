const userInfor = {};

function handChange(event) {
	const name = event.target.name; // Lấy tên của ô input
	const value = event.target.value; // Lấy giá trị hiện tại của ô input
	console.log('handChange  name: ', name);
	console.log('handChange  value: ', value);

	userInfor[name] = value;
	console.log('userInfor sau add :', userInfor);
}

const formElement = document.getElementsByClassName('');

function handleSubmit(event) {
	event.preventDefault();
	console.log('event: ', event);

	const name = event.target.name;

// 	// Lấy giá trị của các ô input
// 	const firstName = document.getElementById('fname').value;
// 	const lastName = document.getElementById('lname').value;
//
// 	// Log ra console các giá trị
// 	console.log('First Name:', firstName);
// 	console.log('Last Name:', lastName);
}
