function useThrottle2(mainFunction, delay) {
	let timerFlag = null; // Variable to keep track of the timer

	return (...args) => {
		if (timerFlag === null) {
			mainFunction(...args);
			timerFlag = setTimeout(() => {
				timerFlag = null;
				console.log(...args);
			}, delay);
		}
	};
}

export default useThrottle2;
