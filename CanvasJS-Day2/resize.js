let canvas = document.getElementById('canvas');
let pen = canvas.getContext('2d');
canvas.style.border = '1px solid red';
canvas.width = 0.9  * window.outerWidth;
canvas.height = 0.9 * window.outerHeight;
pen.strokeStyle = 'red';
pen.moveTo(0,0);
pen.lineTo(canvas.width, canvas.height);
pen.stroke();
pen.beginPath();
pen.moveTo(canvas.width, 0);
pen.lineTo(0, canvas.height);
pen.stroke();
console.log(canvas.width);
console.log(canvas.height);

window.addEventListener('resize', () => {
	canvas.style.border = '1px solid red';
	canvas.width = 0.9  * window.outerWidth;
	canvas.height = 0.9 * window.outerHeight;
	pen.strokeStyle = 'red';
	pen.moveTo(0,0);
	pen.lineTo(canvas.width, canvas.height);
	pen.stroke();
	pen.beginPath();
	pen.moveTo(canvas.width, 0);
	pen.lineTo(0, canvas.height);
	pen.stroke();
});
