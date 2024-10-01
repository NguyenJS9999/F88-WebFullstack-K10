const myName = "Nguyen Minh Hoang";
const username = new String("hoangnm"); // tạo ra typeof là object - không khuyến khích.
console.log(username);

console.log(myName.length);
console.log(myName.charAt(7));
console.log(myName.indexOf("n"));
console.log(myName.lastIndexOf("n"));
console.log(myName.includes("z"));
console.log(myName.slice(2, -4));
console.log(myName.substring(1, -2));
console.log(myName.replace("Hoang", "Tèo"));
console.log(myName.toLocaleLowerCase());
console.log(myName.toLocaleUpperCase());
console.log(myName.trim());
console.log(myName.split(" ")[0]);

// So sánh chuỗi

console.log("A" > "B");
// ["A", "p", "p", "l", "e"]

// ["S",...]

// Ký tự đặc biệt

console.log("hello, \n JavaScript");
console.log("hello, \t JavaScript");
console.log("hello, \\ JavaScript");
console.log('hello, Mr "Tèo"');
console.log("hello, Mr 'Tèo'");
