import React, { useState } from "react";

const useLocalStorage = (key, initialValue) => {
	const [storagedValue, setStoragedVale] = useState(() => {
		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.error(error);
			return initialValue;
		}
	});
	// logic xu ly đặt lại value
	const setLocalStorage = (value) => {
		try {
			localStorage.setItem(key, JSON.stringify(value));
			setStoragedVale(value);
		} catch (error) {
			console.error(error);
		}
	};
	return [storagedValue, setLocalStorage];
};

export default useLocalStorage;

/**Tư duy khi tạo ra hook (hàm dùng sẵn)
 * 1. Đầu vào là gì?
 * 2. Đầu ra là gì?
 * 3. Logic?
 *
 */

/**
 * Đầu vào: key, inititalvalue
 * Đầu ra:
 * - Khi thay đổi thì dữ liệu được đặt vào localStorage. -> setValue
 *
 */
