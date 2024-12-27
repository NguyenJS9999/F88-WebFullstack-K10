import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const Login = () => {
	const [value, setLocalStorage] = useLocalStorage("username", "");
	return (
		<div>
			<input
				type="text"
				defaultValue={value}
				placeholder="username"
				onChange={(e) => setLocalStorage(e.target.value)}
			/>
			<h2>Username: {value}</h2>
		</div>
	);
};

export default Login;

// Có sự thay đổi value của username thì đặt lại value cho key "username" trong localStorage
