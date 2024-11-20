
let f8AnchorElement = document.getElementsByTagName("a")[0];

console.log(f8AnchorElement.href);
console.log(f8AnchorElement.title = "Học lập trình để kiến tiền");
console.log(f8AnchorElement.className);
console.log(f8AnchorElement.style);
console.log(f8AnchorElement.style.background);


console.log(f8AnchorElement.setAttrinute("data-abc", "noi dung"));

// f8AnchorElement.removeAttribute("abc")
// console.log(f8AnchorElement.getAttrinute("abc"));


for ( let i = 0; i  < f8AnchorElement; i++) {
	console.log(`Thuoc tinh ${f8AnchorElement.attributes[i].name}}`);
	console.log(`Thuoc tinh ${f8AnchorElement.attributes[i].name}} có giá trị ${f8AnchorElement.attributes[i].nodeType}`);
}