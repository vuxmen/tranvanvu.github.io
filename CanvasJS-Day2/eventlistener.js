// document.addEventListener('keyup', function() {
// 	console.log('keyup');
// });
// 
// document.addEventListener('keydown', function() {
// 	console.log('keydown');
// });
// 
// document.addEventListener('keypress', function() {
// 	console.log('keypress');
// });

// document.addEventListener('keypress', event => {
// 	if(event.keyCode == 13) {
// 		console.log('Day la nut Enter');
// 	} else {
// 		console.log('Ko phai nut Enter');
// 	}
// } );

let canvas = document.getElementById('canvas');
canvas.width = 500;
canvas.height = 500;
canvas.style.border = '2px solid red';
let pen = canvas.getContext('2d');

// document.addEventListener('keydown', () => {
// 	console.log('abc');
// 	pen.strokeStyle = 'red';
// 	pen.arc(250, 250, 60, 0, 2 * Math.PI);
// 	pen.stroke();
// });


// Vẽ random 5 vòng tròn trong canvas
let hex = 'ABCDEDFGH123456789';
function random(width, height, hex) {
	let x = Math.floor(Math.random() * width);
	let y = Math.floor(Math.random() * height);
	let rx = Math.floor(Math.random() * (width - x));
	let ry = Math.floor(Math.random() * (height - y));
	let r = Math.min(rx, ry);
	let arrColor = hex.split('');
	let rgb = '#';
	for (let i = 0; i < 6; i ++) {
		rgb += Math.floor(Math.random() * hex.length)
	}
	return { x, y, rgb, r}
}

document.addEventListener('keypress', () => {
	for (let i = 0; i < 5; i ++) {
		let obj = random(canvas.width, canvas.height, hex);
		pen.beginPath();
		pen.fillStyle = hex;
		pen.arc(obj.x, obj.y, obj.r, 0, 2 * Math.PI);
		pen.fill();
	}
});

//Resize window
const canvas2 = document.getElementById('canvas2');
let pen2 = canvas2.getContext('2d');
canvas2.width = innerWidth;
canvas2.height = window.outerHeight;
console.log(canvas2.height);
canvas2.style.border = '1px solid black';
pen2.strokeStyle = 'black';
pen2.rect(0.05 * canvas2.width, 0.05 * canvas2.height, 0.9* canvas2.width, 0.9 * canvas2.height);
pen2.stroke();
pen2.beginPath();
pen2.strokeStyle = 'red';
pen2.moveTo(0.05 * canvas2.width, 0.05 * canvas2.height);
pen2.lineTo(0.95* canvas2.width, 0.95 * canvas2.height);
pen2.stroke();
pen2.beginPath();
pen2.moveTo(0.95 * canvas2.width, 0.05 * canvas2.height);
pen2.lineTo(0.05 * canvas2.width, 0.95 * canvas2.height);
pen2.stroke();
window.addEventListener('resize', () => {
	pen2.beginPath();
	canvas2.width = innerWidth;
	canvas2.height = innerHeight;
	pen2.strokeStyle = 'black';
	pen2.rect(0.05 * canvas2.width, 0.05 * canvas2.height, 0.9* canvas2.width, 0.9 * canvas2.height);
});

//Event listener click for canvas
canvas.addEventListener('click', () => {
	let offX = event.offsetX;
	let offY = event.offsetY;
	console.log(offX, offY);
	let ctx = canvas.getContext('2d');
	ctx.fillStyle = 'red';
	ctx.arc(offX, offY, 50, 0, 2 * Math.PI);
	ctx.fill();
});

















