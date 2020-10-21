let canvas = document.getElementById('canvas');
canvas.width = 700;
canvas.height = 500;
canvas.style.border = '1px solid red';
let pen = canvas.getContext('2d');
canvas.addEventListener('click', () => {
	let offX = event.offsetX;
	let offY = event.offsetY;
	pen.clearRect(0, 0, canvas.width, canvas.height);
	pen.beginPath();
	pen.fillStyle = 'red';
	pen.arc(offX, offY, Math.floor(Math.random() * 100), 0, 2 * Math.PI);
	pen.fill();
	console.log(canvas.width);
	console.log(canvas.height);
});