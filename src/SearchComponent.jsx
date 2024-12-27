import React, { useEffect } from "react";
import useDebounce from "./hooks/useDebounce";

const SearchComponent = () => {
	const [query, setQuery] = React.useState("");
	const debouncedQuery = useDebounce(query, 1000);
	useEffect(() => {
		if (debouncedQuery) {
			console.log("Querying for", debouncedQuery);
			// logic chinh.
		}
	}, [debouncedQuery]);
	return (
		<div>
			<input type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
		</div>
	);
};

export default SearchComponent;
