let age = 10;
let myNumber = new Number(10); // Không khuyến khích sử dụng.
console.log(age);
console.log(myNumber);
console.log(age == myNumber);
console.log(age === myNumber);

console.log(typeof myNumber);

// Những giá trị đặc biệt trong Number.
// NaN = Not a Number

const myNumber2 = NaN;
console.log(typeof myNumber2);
console.log(Number.isNaN(myNumber));

console.log("Hoang" / 100);

console.log(100 / 0);
console.log(-100 / 0);

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// BigInt

console.log(12345678901234567890123123456n + 1n);

// Đối tượng Math

console.log(Math.floor(Math.random() * 10));
console.log(Math.abs(-100));
console.log(Math.PI);
console.log(Math.min(1, 2, 36, -1, 4, 100, 1000));
console.log(Math.max(1, 2, 36, -1, 4, 100, 1000));
console.log(Math.pow(2, 4));
console.log(Math.sqrt(16));
