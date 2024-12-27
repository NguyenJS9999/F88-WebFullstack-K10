import { useEffect, useRef, useState } from "react";

const useThrottle = (value, wait) => {
	const [throttledValue, setThrottledValue] = useState(value);
	const timeoutRef = useRef(null);

	useEffect(() => {
		if (!timeoutRef.current) {
			setThrottledValue(value);
			timeoutRef.current = setTimeout(() => {
				timeoutRef.current = null;
			}, wait);
		}
	}, [value, wait]);

	return throttledValue;
};

export default useThrottle;
