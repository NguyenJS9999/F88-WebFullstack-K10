const btnElement = document.querySelector('.btn01');

btnElement.classList.add('btnNew1', 'btnNew2');
btnElement.classList.remove('btnNew1', 'btnNew2');
btnElement.classList.replace('btn', 'btnNew2');

btnElement.classList.toggle('button');
console.log('btnElement: ', btnElement);

btnElement.style.backgroundColor = 'black';
btnElement.style.color = 'white';

const bodyElement = document.querySelector('body');
console.log('bodyElement: ', bodyElement);
bodyElement.style.height = '100vh';
bodyElement.style.backgroundColor = 'white';

function myFunc() {
	console.log('Click me ');
	bodyElement.classList.toggle('dark');
}
