function taskA() {
	new Promise(function (resolve, reject) {
		setTimeout(() => {
			console.log('task A');
			resolve('task A done!');
		}, 3000);
	});
}

function taskB() {
	new Promise(function (resolve, reject) {
		setTimeout(() => {
			resolve('Task B done!');
		}, 2000);
	});
}

function taskC() {
	new Promise(function (resolve, reject) {
		setTimeout(() => {
			resolve('Task C done!');
		}, 2000);
	});
}


Promise.all( [taskA(), taskB(), taskC() ]).then(() => {
	console.log("Done!");
}).catch(err => {
	console.log("Có việt gì xảy ra rồi", err)
});


/**
chaning promise là gì mổ tả cách oạt động
promis .all là gì  cách hoạt động
Proimiser khác gì vs async / await
 *
*/