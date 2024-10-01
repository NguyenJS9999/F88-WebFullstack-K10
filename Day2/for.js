// for (let i = 0; i <= 100; i++) {
// 	//
// 	console.log(i);
// }

// let i = 0;
// for (; i <= 100; i++) {
// 	//
// 	console.log(i);
// }

// let i = 0;
// for (;;) {
// 	if (i <= 100) {
// 		console.log(i);
// 	} else {
// 		break;
// 	}
// 	i++;
// 	// if (i < 100) break;
// 	// console.log(i);
// }

/**
 * 1. Câu lệnh khởi tạo biến i = 0 được thực hiện trước khi vòng lặp bắt đầu và chỉ chạy 1 lần.
 * 2. Điều kiện lặp i <= 100 được kiểm tra trước mỗi lần lặp.
 * 3. Câu lệnh tăng giá trị i++ được thực hiện sau mỗi lần lặp.
 */

// Vòng lặp vô tận:
// for (let i = 10; i <= 10; i--) {
// 	console.log(i);
// }

/** Lưu ý:
 * Luôn viết điều kiện dừng trước vòng lặp để tránh vòng lặp vô tận.
 */

// console.time("for");
// for (let i = 1; i <= 100; i++) {
// 	for (let j = 1; j <= 100; j++) {
// 		console.log(`${i} * ${j} = ${i * j}`);
// 	}
// }
// console.timeEnd("for");
