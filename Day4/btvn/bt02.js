function createObject(name, password, email) {
	return { name, password, email };
}

// const user = createObject("hoang", "123", "hoang@gmail.com");

// console.log(user);

const users = [];
function register(item) {
	if (!item.name || !item.password || !item.email) {
		return "Thieu du lieu!";
	}
	item.role = "user";
}

register(createObject("duy", "1234567890", "duy@gmail.com"));
register(createObject("hoang", "1234567890", "duy@gmail.com"));
register(createObject("manh", "1234567890", "manh@gmail.com"));
console.log(users);

function login(email, password) {
	for (let i = 0; i < users.length; i++) {
		if (users[i].email === email && users[i].password === password) {
			console.log(1);
			return `Dang nhap thanh cong!, ${users[i].email}`;
		}
	}
	return `Dang nhap that bai!`;
}

console.log(login("manh@gmail.com", "1234567890"));
