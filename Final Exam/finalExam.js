
let container = document.querySelector('#css-container');
let carousel = document.querySelector('#css-carousel');
let carouselChild = document.querySelectorAll('.carousel-child');
let preButton = document.querySelector('#css-preButton');
let nextButton = document.querySelector('#css-nextButton');
let counter = 1;
let width = container.clientWidth;

let jscontainer = document.querySelector('#js-container');
let jscarousel = document.querySelector('#js-carousel');
let jscarouselChild = document.querySelectorAll('.js-carousel-child');
let jspreButton = document.querySelector('#js-preButton');
let jsnextButton = document.querySelector('#js-nextButton');
let jscounter = 1;
let jswidth = jscontainer.clientWidth;

carousel.style.transform = 'translateX(' + (-counter * width) + 'px)';
jscarousel.style.transform = 'translateX(' + (-jscounter * jswidth) + 'px)';

//Automatic carousel of HTML, CSS part every 4s
setInterval(function() {
	if (counter >= carouselChild.length - 1 ) return;
	carousel.style.transition = 'transform 0.4s linear';
	counter ++;
	carousel.style.transform = 'translateX(' + (-counter * width) + 'px)';
}, 4000);

//Automatic carousel of JS part every 4s
setInterval(function() {
	if (jscounter >= jscarouselChild.length - 1 ) return;
	jscarousel.style.transition = 'transform 0.4s linear';
	jscounter ++;
	jscarousel.style.transform = 'translateX(' + (-jscounter * width) + 'px)';
}, 3000);

//Function for click in HTML, CSS part
preButton.addEventListener('click', () => {
	if (counter <= 0) return;
	carousel.style.transition = 'transform 0.4s linear';
	counter --;
	carousel.style.transform = 'translateX(' + (-counter * width) + 'px)'; 

});

nextButton.addEventListener('click', () => {
	if (counter >= carouselChild.length - 1 ) return;
	carousel.style.transition = 'transform 0.4s linear';
	counter ++;
	carousel.style.transform = 'translateX(' + (-counter * width) + 'px)'; 
});

//Function for transitionend in HTML, CSS part
carousel.addEventListener('transitionend', () => {
	if (carouselChild[counter].id === 'css-first') {
		console.log('counter = ' + counter);
		carousel.style.transition = 'none';
		counter = carouselChild.length - counter;
		carousel.style.transform = 'translateX(' + (-counter * width) + 'px)';
	}
   	if (carouselChild[counter].id === 'css-last') {
   		console.log('counter = ' + counter);
      	carousel.style.transition = 'none';
      	counter = carouselChild.length - 2;
      	carousel.style.transform = 'translateX(' + (-counter * width)+ 'px)';
    }
})

//Function for click in JS part
jspreButton.addEventListener('click', () => {
	if (jscounter <= 0) return;
	jscarousel.style.transition = 'transform 0.4s linear';
	jscounter --;
	jscarousel.style.transform = 'translateX(' + (-jscounter * jswidth) + 'px)'; 

});

jsnextButton.addEventListener('click', () => {
	if (jscounter >= jscarouselChild.length - 1 ) return;
	jscarousel.style.transition = 'transform 0.4s linear';
	jscounter ++;
	jscarousel.style.transform = 'translateX(' + (-jscounter * jswidth) + 'px)'; 
});

//Function for transitionend in JS part
jscarousel.addEventListener('transitionend', () => {
	if (jscarouselChild[jscounter].id === 'js-first') {
		jscarousel.style.transition = 'none';
		jscounter = jscarouselChild.length - jscounter;
		jscarousel.style.transform = 'translateX(' + (-jscounter * jswidth) + 'px)'; 
	}
   	if (jscarouselChild[jscounter].id === 'js-last') {
      	jscarousel.style.transition = 'none';
      	jscounter = jscarouselChild.length - 2;
      	jscarousel.style.transform = 'translateX(' + (-jscounter * jswidth) + 'px)'; 
    }
})

//Introduction CODE
// let aboutMe = {
// 	name: 'Tran Van Vu',
// 	born: 1991,
// 	city: 'Ha Noi',
// 	interested in: ['Code', 'Game', 'Music', 'Book', 'Film', 'Sport']
// }
// var lifeForCode = true;
// var CodeForlife = true;
// var retire = 2040;

// function Introduction(_aboutMe, _lifeForCode, _CodeForlife,_retire) {
// 	while (_lifeForCode || _CodeForlife) {
// 		console.log('CodeForlife or lifeForCode');
// 		_aboutMe.born ++;
// 		if (_aboutMe.born > retire) break;
// 	}
// }

// Introduction(aboutMe, lifeForCode, CodeForlife, retire);



















