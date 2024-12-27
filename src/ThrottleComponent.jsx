import React, { useState } from "react";
import useThrottle from "./hooks/useThrottle";

const ThrottleComponent = () => {
	const [throttleInput, setThrottleInput] = useState("");
	const throttledValue = useThrottle(throttleInput, 1000);

	return (
		<div>
			<h1>Throttle vs Debounce Demo</h1>
			<div style={{ marginBottom: "20px" }}>
				<label htmlFor="throttle">Throttle Input (Trigger every 1s): </label>
				<input
					type="text"
					id="throttle"
					value={throttleInput}
					onChange={(e) => setThrottleInput(e.target.value)}
					placeholder="Type something"
				/>
				<p>
					<strong>Throttled:</strong> {throttledValue === "" ? "Waiting..." : throttledValue}
				</p>
			</div>
		</div>
	);
};

export default ThrottleComponent;
