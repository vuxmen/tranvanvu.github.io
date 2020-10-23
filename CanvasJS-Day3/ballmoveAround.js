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
		this.dx = 5;
		this.dy = 0;
	}

	draw() {
		pen.beginPath();
		pen.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		pen.fillStyle = this.color;
		pen.fill();
	}

	move() {
		if (this.x >= canvas.width - this.radius && this.y <= this.radius) {
			this.dx = 0;
			this.dy = 5;
		} if (this.x >= canvas.width - this.radius && this.y >= canvas.height - this.radius) {
			this.dx = -5;
			this.dy = 0;
		} if (this.x <= this.radius && this.y >= canvas.height - this.radius) {
			this.dx = 0;
			this.dy = -5;
		} if (this.x <= this.radius && this.y <= this.radius) {
			this.dx = 5;
			this.dy = 0;
		}
		this.x = this.x + this.dx;
		this.y = this.y + this.dy;

		this.draw();
	}

}

let ball1 = new Ball(30, 30, 30, 'red');

ball1.draw();
var state = false;

function animate() {
	requestAnimationFrame(animate);
	pen.clearRect(0, 0, canvas.width, canvas.height);
	ball1.move();
	state = true;
}

document.addEventListener('keydown', () => {
	if (event.keyCode == 32 && state == true) {
		ball1.dx = 0;
		ball1.dy = 0;
	} else if (event.keyCode == 32 && state == false) {
		animate();
	}
});










