let canvas = document.getElementById('canvas');
let pen = canvas.getContext('2d');
let rect = {};
let circle = {};
let circleN = {};
let text = {};
let button = document.getElementsByTagName('button');

button[0].addEventListener('click', () => {
	pen.clearRect(0, 0, canvas.width, canvas.height);
	pen.beginPath();
	rect.x = document.getElementsByTagName('input')[0].value;
	rect.y = document.getElementsByTagName('input')[1].value;
	rect.width = document.getElementsByTagName('input')[2].value;
	rect.height = document.getElementsByTagName('input')[3].value;
	rect.bw = document.getElementsByTagName('input')[4].value;
	rect.bg = document.getElementsByTagName('input')[5].value;
	pen.lineWidth = rect.bw;
	pen.strokeRect(rect.x, rect.y, rect.width, rect.height);
	pen.fillStyle = rect.bg;
	pen.fillRect(rect.x, rect.y, rect.width, rect.height);
	console.log(rect);
	return rect
});

button[1].addEventListener('click', () => {
	pen.clearRect(0, 0, canvas.width, canvas.height);
	pen.beginPath();
	circle.x = document.getElementsByTagName('input')[6].value;
	circle.y = document.getElementsByTagName('input')[7].value;
	circle.radius = document.getElementsByTagName('input')[8].value;
	circle.bw = document.getElementsByTagName('input')[9].value;
	circle.bg = document.getElementsByTagName('input')[10].value;
	pen.lineWidth = circle.bw;
	pen.fillStyle = circle.bg;
	pen.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
	pen.stroke();
	pen.fill();
	return circle
});

button[2].addEventListener('click', () => {
	// pen.clearRect(rect.x - rect.bw, rect.y - rect.bw, rect.width + 2 * rect.bw, rect.height + 2 * rect.bw);
	// pen.clearRect(circle.x - circle.radius - circle.bw, circle.y - circle.radius - circle.bw, circle.radius * 2 + circle.bw * 2, circle.radius * 2 + circle.bw * 2);
	pen.clearRect(0, 0, canvas.width, canvas.height);
	circleN.numb = document.getElementsByTagName('input')[11].value;
	let x;
	let y; 
	let radius;
	let minX;
	let minY;
	let hex = 'ABCDEFGH123456789';
	let rgb = '#';
	for (let i = 0; i < circleN.numb; i ++) {
		 x = Math.floor(Math.random() * canvas.width);
		 y = Math.floor(Math.random() * canvas.height);
		 minX = Math.min(x, canvas.width - x);
		 minY = Math.min(y, canvas.height - y);
		 radius = Math.min(Math.floor(Math.random() * minX), Math.floor(Math.random() * minY));
		 rgb += Math.floor(Math.random() * hex.length);
		 pen.beginPath();
		 pen.fillStyle = rgb;
		 pen.arc(x, y, radius, 0, 2 * Math.PI);
		 pen.fill()
	}
});

button[3].addEventListener('click', () => {
	pen.clearRect(0, 0, canvas.width, canvas.height);
	pen.beginPath();
	text.string = document.getElementsByTagName('input')[12].value;
	text.x = document.getElementsByTagName('input')[13].value;
	text.y = document.getElementsByTagName('input')[14].value;
	pen.font = document.getElementsByTagName('input')[15].value;
	text.color = document.getElementsByTagName('input')[16].value;
	pen.fillStyle = text.color;
	pen.fillText(text.string, text.x, text.y);
	console.log(pen.font);
});

button[4].addEventListener('click', () => {
	pen.clearRect(0, 0, canvas.width, canvas.height);
	
});







