
var container = document.querySelector('#css-container');
var carousel = document.querySelector('#css-carousel');
var carouselChild = document.querySelectorAll('.carousel-child');
var preButton = document.querySelector('#css-preButton');
var nextButton = document.querySelector('#css-nextButton');
var counter = 1;
var width = container.clientWidth;
var distance = 0;

carousel.style.transform = 'translateX(' + (-width) + 'px)';

preButton.addEventListener('click', () => {
	if (counter <= 0) return;
	carousel.style.transition = 'transform 0.4s linear';
	counter --;
	distance = counter * width;
	carousel.style.transform = 'translateX(' + (-distance) + 'px)'; 

});

nextButton.addEventListener('click', () => {
	if (counter >= carouselChild.length -1 ) return;
	carousel.style.transition = 'transform 0.4s linear';
	counter ++;
	distance = counter * width;
	carousel.style.transform = 'translateX(' + (-distance) + 'px)'; 
});

carousel.addEventListener('transitionend', () => {
	if (carouselChild[counter].id === 'first') {
		carousel.style.transition = 'none';
		carousel.style.transform = 'translateX(' + (-width) + 'px)';
		counter = 1;
	}
   	if (carouselChild[counter].id === 'last') {
      	carousel.style.transition = 'none';
      	carousel.style.transform = 'translateX(' + -(carouselChild.length - 2) * width + 'px)';
      	counter = 5;
    }
})



var jscontainer = document.querySelector('#js-container');
var jscarousel = document.querySelector('#js-carousel');
var jscarouselChild = document.querySelectorAll('.js-carousel-child');
var jspreButton = document.querySelector('#js-preButton');
var jsnextButton = document.querySelector('#js-nextButton');
var jscounter = 1;
var jswidth = jscontainer.clientWidth;
var jsdistance = 0;

jscarousel.style.transform = 'translateX(' + (-jswidth) + 'px)';

jspreButton.addEventListener('click', () => {
	if (jscounter <= 0) return;
	jscarousel.style.transition = 'transform 0.4s linear';
	jscounter --;
	jsdistance = jscounter * jswidth;
	jscarousel.style.transform = 'translateX(' + (-jsdistance) + 'px)'; 

});

jsnextButton.addEventListener('click', () => {
	if (jscounter >= jscarouselChild.length -1 ) return;
	jscarousel.style.transition = 'transform 0.4s linear';
	jscounter ++;
	jsdistance = jscounter * jswidth;
	jscarousel.style.transform = 'translateX(' + (-jsdistance) + 'px)'; 
});

jscarousel.addEventListener('transitionend', () => {
	if (jscarouselChild[jscounter].id === 'first') {
		jscarousel.style.transition = 'none';
		jscarousel.style.transform = 'translateX(' + (-jswidth) + 'px)';
		jscounter = 1;
	}
   	if (jscarouselChild[jscounter].id === 'last') {
      	jscarousel.style.transition = 'none';
      	jscarousel.style.transform = 'translateX(' + -(jscarouselChild.length - 2) * jswidth + 'px)';
      	jscounter = 5;
    }
})
