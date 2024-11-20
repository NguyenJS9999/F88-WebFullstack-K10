function taskA(callback) {
	setTimeout(() => {
		callback();
	}, 3000);
}

function taskB(callback) {
	setTimeout(() => {
		callback();
	}, 2000);
}

function taskC(callback) {
	setTimeout(() => {
		callback();	
	}, 1000);
}

console.time("Callback-timer");

taskA(() =>
	taskB(() =>
		taskC( () => {
			console.log("Đã xong hết các việc");
			console.timeEnd("callback-timer");

		})
	)
);
