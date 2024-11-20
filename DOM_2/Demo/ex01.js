const btnElement = document.querySelector('.btn01');

btnElement.style.background = 'blue';
btnElement.style.padding = '12px';
btnElement.style.borderRadius = '6px';
// btnElement.style.cursor = pointer;

btnElement.style.cssText = 'font-size: 32px; color: red; border: 3px solid';

console.dir(btnElement);

const trElementEvent = document.querySelectorAll('tbody > tr:nth-child(even');
trElementEvent.forEach((item) => {
	item.style.backgroundColor = 'gray';

})

