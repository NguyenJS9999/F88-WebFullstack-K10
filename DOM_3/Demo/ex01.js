// Truy vấn nút

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next')[0];
const prevBtn = document.querySelector('.prev')[0];

const dot = document.getElementsByClassName('dot');
dot.forEach((item, index) => {
	item.addEventListener('click', () => setSliderByDot(index));
});

const slideLength = slides.length;

let currentSlide = 0;

function renderSlide() {
	slides.forEach(item => {
		item.style.display = 'none';
	});
	slides[currentSlide].style.display = 'block';

	slides;
}

console.log('slides', slides);

function next() {
	currentSlide++;
	console.log('next: ', currentSlide);
	if (currentSlide >= slideLength) {
		currentSlide = 0;
	}
	renderSlide();
}

function prev() {
	currentSlide++;
	console.log('prev: ', currentSlide);
	if (currentSlide >= slideLength) {
		currentSlide = 0;
	}
	renderSlide();
}

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

renderSlide();
