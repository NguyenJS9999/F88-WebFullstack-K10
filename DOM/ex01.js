
// console.log( 'getElementsByTagName', document.body.getElementsByTagName("h2")[0] );

// console.log( 'getElementsById', document.getElementById("section-2") );
// console.log( 'getElementsByClassName: ', document.getElementsByClassName("section-3") );
// console.log( 'querySelector: ', document.querySelector("p.paragraph") );

// console.log( 'querySelector: ', document.querySelector(".paragraph:last-child"));
// console.log( 'querySelector: ', document.querySelector("div > p.paragraph:last-child"));
// console.log( 'querySelector: ', document.querySelectorAll("div > p.paragraph"));

/**
 * getElementsByTagNanme
 * -  Luôn trả về HTMLCollection 
*/

/**
 * getElementById
 * - Trả về một phần tử HTML đầu tiên có id được truyền vào.
*/

/**
 * getElementByClassNames
 * - Luôn trả về HTMLCollection, ko tìm được thì trả về rỗng
*/

/**
 * querySelector
 * querySelectorAll
 */

let oddElement = document.querySelectorAll("div > p:nth-child(odd)");
// let oddElement = document.querySelectorAll("div > p:nth-child(2n+1)");
// console.log(oddElement);

// for(let i = 0; i < oddElement.length; i++ ) {
// 	console.log(`Phần tử ${i}`, oddElement[i]);
// }

// oddElement.forEach((item, index) => {
// 	console.log(`Phần tử ${index} là: ${ item[index] }`);\
// });

let pElement = document.getElementsByTagName("p");
console.log( "pElement: ",pElement);