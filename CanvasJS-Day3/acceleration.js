let canvas = document.getElementById('canvas');
let pen = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 600;
canvas.style.border = '1px solid red';
//PT chuyển động thẳng chậm dần đều: x = x0 + v0 * t + 0,5 * a * t^2;
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

	move() {
		this.x = 30 + this.dx * this.time + 0.5 * this.acceleration * this.time * this.time;
		this.draw();
	}

}

let ball = new Ball(100, 100, 30, 'red');
ball.draw();

document.addEventListener('keydown', () => {
	if (event.keyCode == 32) {
		ball.dx = 5;
		ball.acceleration = -2;
		ball.time = 60;
	}
	animate();

});

function animate() {
	requestAnimationFrame(animate);
	pen.clearRect(0, 0, canvas.width, canvas.height);
	ball.move();
}









