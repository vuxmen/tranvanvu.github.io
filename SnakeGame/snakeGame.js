const canvas = document.getElementById('canvas');
canvas.width = 500;
canvas.height = 500;
canvas.style.border = '10px solid grey';
canvas.style.marginTop = '40px';
const pen = canvas.getContext('2d');

let block = 20;
let score;
let food;
let snake;
let interval;
let checkInterval = true;
let directions = {
	37: 'left',
	38: 'top',
	39: 'right',
	40: 'bottom'
}

interval = setInterval(function() {
	pen.clearRect(0, 0, canvas.width, canvas.height);
	drawText();
	food.draw();
	snake.draw();
	snake.move();
	snake.checkcollision();
	if (checkInterval == false) {
		clearInterval(interval);
		setTimeout(function() {
			window.alert('Game Over');
		}, 500);
	}
}, 100);



function drawText() {
	pen.beginPath();
	pen.font = 'bold 20px Georgia';
	pen.fillText(`Điểm: ${score}`, 10, 20);

}

function init() {
	score = 0;
	drawText();
	food = new Food('red');
	food.draw();
	snake = new Snake('orange');
	snake.draw();
}

window.onload = init;

class Block {
	constructor(col, row) {
		this.col = col;
		this.row = row;
	}

	drawRect(color) {
		let x = this.col * block;
		let y = this.row * block;
		pen.beginPath();
		pen.fillStyle = color;
		pen.rect(x, y, block, block);
		pen.fill();
	}

	drawCircle(color) {
		let x = this.col * block + block / 2;
		let y = this.row * block + block / 2;
		pen.beginPath();
		pen.fillStyle = color;
		pen.arc(x, y, block/2, 0, 2 * Math.PI);
		pen.fill();
	}

	equal(block) {
		return this.col == block.col && this.row == block.row;
	}
}

class Food {
	constructor(color) {
		this.position = new Block (5, 6);
		this.color = color;
	}

	draw() {
		this.position.drawCircle(this.color);
	}

	random() {
		let colRandom = Math.floor(Math.random() * ((canvas.width - block) / block));
		let rowRandom = Math.floor(Math.random() * ((canvas.height - block) / block));
		this.position = new Block (colRandom, rowRandom);
	}
}

class Snake {
	constructor(color) {
		this.segments = [new Block(10,5), new Block(9,5), new Block(8,5)];
		this.color = color;
		this.direction = 'right';
	}

	draw() {
		this.segments.forEach(element => element.drawRect(this.color));
		this.segments[0].drawRect('green');
	}

	move() {
		let head = this.segments[0];
		let newHead; 
		
		if (this.direction == 'right') {
			newHead = new Block(head.col + 1, head.row);
		} else if (this.direction == 'left') {
			newHead = new Block(head.col - 1, head.row);
		} else if (this.direction == 'top') {
			newHead = new Block(head.col, head.row - 1);
		} else if (this.direction == 'bottom') {
			newHead = new Block(head.col, head.row + 1);
		}

		this.segments.unshift(newHead);

		if (head.equal(food.position)) {
			score ++;
			food.random();
			console.log(this);
		} else {
			this.segments.pop();
		}
	}

	checkcollision() {
		if (this.segments[0].col < 0 || this.segments[0].col > (canvas.width - block )/block || this.segments[0].row < 0 || this.segments[0].row > (canvas.height - block) / block ) {
			checkInterval = false;
		} 

		for (let i = 0; i < this.segments.length - 1; i ++) {
			for (let j = i + 1; j < this.segments.length; j ++) {
				if (this.segments[i].col == this.segments[j].col && this.segments[i].row == this.segments[j].row) {
					checkInterval = false;
				}
			}
		}		
	}
}



document.addEventListener('keydown', (event) => {
	let newDirection = directions[event.keyCode];
	if (newDirection) {
		if (snake.direction == 'right' && newDirection == 'left' || 
			snake.direction == 'left' && newDirection == 'right' ||
			snake.direction == 'top' && newDirection == 'bottom' ||
			snake.direction == 'bottom' && newDirection == 'top' 
		) {
			return
		} else {
			snake.direction = newDirection;
		}
	}
});










