/**
 * Các cách khai báo
 *
*/

const now1 = new Date();
const now2 = new Date();

console.log(now1);
console.log(typeof now1);
console.log(typeof now2);

const result =  now2 - now1; //
console.log(result / (60*60*24*365*1000));

console.log({now2});
console.log(now2.getFullYear());
console.log(now2.getMonth());
console.log(now2.getDay());
console.log(now2.getHours());
console.log(now2.getMinutes());
console.log(now2.getTime()); // Số mili giây tính từ giây đầu năm 1970.

// TODO:
const date3 = new Date("1969-01-01")
console.log(date3.getTime());

// TODO: Bao giờ làm tròn 2 số
const timeNow = new Date();
const timePast = new Date("1924-08-10 23:59")
const result2 = timeNow - timePast;

function lamTronTime() {
	const hours = result2/(1000*60*60).toFixed(2);
	return hours;
}

console.log( "lamTronTime(): ", lamTronTime() );
