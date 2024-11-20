const parentElement = document.getElementById('parent');
const childElement = document.getElementById('child');
const btnElement = document.getElementById('btn');

parentElement.addEventListener('click', function (event) {
	console.log('click parentElement! ');
});
childElement.addEventListener('click', function () {
	console.log('click childElement! ');
});
btnElement.addEventListener('click', function () {
	event.stopPropagation();
	console.log('click btnElement! ');
});
