import React, { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
	const [deboucedValue, setDeboucedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDeboucedValue(value);
		}, delay);

		// clean up function (được gọi khi component unmount)
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);
	return deboucedValue;
};

export default useDebounce;

// Luồng:
/**
 * Có sự kiện -> thay đổi state -> gọi debounce -> tạo setTimeout và bắt đầu delay -> hết thời gian delay setDeboucedValue -> value được trả ra ngoài, gọi logic xử lý sự kiện chính
 */
