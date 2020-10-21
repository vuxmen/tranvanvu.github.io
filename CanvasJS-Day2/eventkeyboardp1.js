let canvas = document.getElementById('canvas');
let pen = canvas.getContext('2d');
let rect = {};
let circle = {};
let text = {};
let button = document.getElementsByTagName('button');
let hex = 'ABCDEFGH123456789';
let symbol = '#';

button[0].addEventListener('click', () => {
	pen.clearRect(0, 0, canvas.width, canvas.height);
	pen.beginPath();
	rect.x = Math.floor(Math.random() * canvas.width);
	rect.y = Math.floor(Math.random() * canvas.height);
	rect.width = Math.floor(Math.min(rect.x, canvas.width - rect.x));
	rect.height = Math.floor(Math.min(rect.y, canvas.height - rect.y));
	for (let i = 0; i < 6; i ++) {
		symbol +=  Math.floor(Math.random() * hex.length);
	}
	pen.strokeStyle = symbol;
	pen.strokeRect(rect.x, rect.y, rect.width, rect.height);
	pen.fillStyle = symbol;
	pen.fillRect(rect.x, rect.y, rect.width, rect.height);
	symbol = '#';
	return rect
});

button[1].addEventListener('click', () => {
	pen.clearRect(0, 0, canvas.width, canvas.height);
	pen.beginPath();
	circle.x = Math.floor(Math.random() * canvas.width);
	circle.y = Math.floor(Math.random() * canvas.height);
	let minx = Math.floor(Math.min(circle.x, canvas.width - circle.x));
	let miny = Math.floor(Math.min(circle.y, canvas.height - circle.y));
	circle.radius = Math.min(minx, miny);
	for (let i = 0; i < 6; i ++) {
		symbol +=  Math.floor(Math.random() * hex.length);
	}
	pen.strokeStyle = symbol;
	pen.fillStyle = symbol;
	pen.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
	pen.stroke();
	pen.fill();
	symbol = '#';
	return circle
});

button[2].addEventListener('click', () => {
	pen.clearRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i < 6; i ++) {
		pen.beginPath();
		circle.x = Math.floor(Math.random() * canvas.width);
		circle.y = Math.floor(Math.random() * canvas.height);
		let minx = Math.floor(Math.min(circle.x, canvas.width - circle.x));
		let miny = Math.floor(Math.min(circle.y, canvas.height - circle.y));
		circle.radius = Math.min(minx, miny);
		for (let j = 0; j < 6; j ++) {
			symbol +=  Math.floor(Math.random() * hex.length);
		}
		pen.strokeStyle = symbol;
		pen.fillStyle = symbol;
		pen.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
		pen.stroke();
		pen.fill();
		symbol = '#';
	}
});

button[3].addEventListener('click', () => {
	pen.clearRect(0, 0, canvas.width, canvas.height);
	pen.beginPath();
	text.x = Math.floor(Math.random() * canvas.width);
	text.y = Math.floor(Math.random() * canvas.height);
	for (let j = 0; j < 6; j ++) {
		symbol +=  Math.floor(Math.random() * hex.length);
	}
	pen.fillStyle = symbol;
	pen.fillText('Tech master', text.x, text.y);
	symbol = '#';
});

button[4].addEventListener('click', () => {
	pen.clearRect(0, 0, canvas.width, canvas.height);
});





