let canvas = document.getElementById('canvas');
let pen = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 400;
canvas.style.border = '1px solid red';
canvas.style.margin = 'auto';

class Circle {
	constructor(x, y, radius, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
	}

	draw() {
		pen.beginPath();
		pen.fillStyle = this.color;
		pen.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		pen.fill();
	}
}

let circle1 = new Circle();
let circle2 = new Circle();
let circle3 = new Circle();
let circle4 = new Circle();
let circle5 = new Circle();
let circle = [circle1, circle2, circle3, circle4, circle5];
let hexAlpha = '123456789ABCDEFGH';
let symbol = '#';

function randomAtribute() {
	let minX;
	let minY;
	circle.forEach (element =>  {
		element.x = Math.floor(Math.random() * canvas.width);
		element.y = Math.floor(Math.random() * canvas.height);
		minX = Math.min(Math.floor(Math.random() * element.x), Math.floor(Math.random() * (canvas.width - element.x)));
		minY = Math.min(Math.floor(Math.random() * element.y), Math.floor(Math.random() * (canvas.height - element.y)));
		element.radius = Math.min(Math.floor(Math.random() * minX), Math.floor(Math.random() * minY));
		element.color = '#';
		for (let i =0; i < 6; i ++) {
			element.color += Math.floor(Math.random() * hexAlpha.length);
		}	
	});	
}

document.getElementById('callrandom').addEventListener('click', () => {
	pen.clearRect(0, 0, canvas.width, canvas.height);
	randomAtribute();
	circle.forEach( e => e.draw());

});





