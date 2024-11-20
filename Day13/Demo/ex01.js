const formElement = document.getElementById('registerForm');
console.log('formElement: ', formElement);

formElement.addEventListener('submit', function (event) {
	event.preventDefault();
	// Cach 2

	const formData = new FormData(formElement);
	const data = Object.entries(formData);
	// formData.forEach((value,key) =>{
	// 	data[key] = value;
	// }) ;
	console.log('data: ', data);

	//
	// 	if (!data.email || !data.password) {
	// 		alert("Vui lòng nhập đủ thông tin!")
	// 		return;
	// 	}
	//
	// 	if (data.password.length < 8) {
	// 		alert("Passs cần tối thiểu 8 kí tự")
	// 	}

	const usersSaved = JSON.parse(localStorage.getItem('users') || '[]');
	localStorage.setItem('users', JSON.stringify([...usersSaved, data]));

	console.log('Dang kí thành công', data);
	formElement.reset();
});
