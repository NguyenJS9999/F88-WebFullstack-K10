import "./App.css";
import Login from "./Login";
import SearchComponent from "./SearchComponent";
import ThrottleComponent from "./ThrottleComponent";

function App() {
	return (
		<>
			<h2>Debouncing</h2>
			<SearchComponent />
			<Login />
			<h2>Throttling</h2>
			<ThrottleComponent />
		</>
	);
}

export default App;
