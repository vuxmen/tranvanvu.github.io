let canvas = document.getElementById('canvas');
let pen = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 600;
canvas.style.border = '1px solid red';

class Ball {
	constructor(x, y, radius, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
	}

	draw() {
		pen.beginPath();
		pen.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		pen.fillStyle = this.color;
		pen.fill();
	}

	move(dx, dy) {
		this.x = this.x + dx;
		this.y = this.y + dy;
		pen.clearRect(0, 0, canvas.width, canvas.height);
		if (this.x <= this.radius) {
			this.x = this.radius;
		} 
		if (this.x >= canvas.width - this.radius) {
			this.x = canvas.width - this.radius;
		} 
		if (this.y <= this.radius) {
			this.y = this.radius
		}
		if (this.y >= canvas.height - this.radius) {
			this.y = canvas.height - this.radius;
		}
		this.draw();
	}

}

let ball1 = new Ball(100, canvas.height/2, 30, 'red');

ball1.draw();

document.addEventListener('keydown', () => {
	if (event.keyCode == 37) {
		ball1.move(-20, 0);
	} else if (event.keyCode == 39) {
		ball1.move(20, 0);
	} else if (event.keyCode == 38) {
		ball1.move(0, -20);
	} else if (event.keyCode == 40) {
		ball1.move(0, 20);
	}
});









