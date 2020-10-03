
// var carousel = $('#carousel');
var container = document.getElementById('carousel-container');
var carousel = document.getElementById('carousel');
var carousel_Child = document.querySelectorAll('.carousel-child');
var counter = -1;
var width = container.clientWidth;
var distance = 0;

$('.left_butt').click(function() {
	counter ++;
	distance = counter * width;
	carousel.style.transform = 'translateX(' + distance + 'px)'; 
	console.log(counter);
	
});

$('.right_butt').click(function() {
	counter --;
	distance = counter * width;
	carousel.style.transform = 'translateX(' + distance + 'px)'; 
	console.log(counter);
	
});

// carousel.addEventListener('transition', () => {
// 	if (carousel[counter].id === 'first') {
// 		carousel.style.transition = 'none';
// 		carousel.style.transform = 'translateX(' + -3*
// 	}
// })