let h2Element = document.getElementsByTagName("h2")[0];
// console.log(h2Element.innerText);

// get: lấy ra thông tin innerText

// h2Element.innerText = "Hello F8";
h2Element.outerHTMLText = "Hello F8";

// let productItemElement = document.getElementsByTagName("ul");
// console.log(productItemElement[0]);

let productItemElement = document.getElementById("example");



console.log(productItemElement.innerText);
console.log(productItemElement.textContent);

console.log(productItemElement.innerHTML);
console.log(productItemElement.outerHTML);

console.log( typeof productItemElement );


