function myFunc() {
	console.log('myFunc: ', myFunc);
}

function handleChange() {
	// const target = event.target.value;
	console.log('handleChange event: ', event);
}

function handleSelect(event) {
	// console.log('handleSelect event: ', event.target.value);
	console.log('handleSelect event: ', event.children);

}
