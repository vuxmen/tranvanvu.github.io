

let canvas = document.querySelector('#canvas');
let pen = canvas.getContext('2d');
let w;

canvas.width = 600;
canvas.height = 600;
canvas.style.border = '2px solid black';
canvas.style.display = 'block';
canvas.style.margin = 'auto';
w = canvas.width / 4;

let grid = [
		[0, 0, 0, 0],
		[0, 0, 0, 0], 
		[0, 0, 0, 0], 
		[0, 0, 0, 0]
	];


function setUp() {
	addItem();
	addItem();
}

let count = 0;

function randomItem(arr) {
 	return arr[Math.floor(Math.random() * arr.length)];
} 

function addItem() {
	let options = [];
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			if (grid[i][j] === 0) {
				options.push({x: i, y: j});
			}
		}
	}
	if (options.length > 0);
	let element = randomItem(options);
	let r = Math.random() * 1;
	grid[element.x][element.y] = r > 0.5 ? 2 : 4;
}

function drawItem() {
	pen.font = '60px Roboto';
	pen.fillStyle = 'red';
	pen.lineWidth = 2;
	pen.textBaseline = 'middle';
	pen.textAlign = 'center';
	pen.clearRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			pen.beginPath();
			pen.rect(i * w, j * w, w, w);
			pen.stroke();
			let val = grid[i][j];
			if (val !== 0) {
				pen.beginPath();
				pen.fillText(val, j * w + w/2, i * w + w/2);
			}
		}
	}
}

setUp();

drawItem();

function flingTotheLeft(row) {
	let arr = row.filter(val => val);
	let missing = 4 - arr.length;
	let zero = Array(missing).fill(0);
	let newarr = arr.concat(zero);
	return newarr;
}

function mergeEqual(row) {
	for (let i = 0; i < 3; i ++) {
		if (row[i] == row[i + 1]) {
			row[i] *= 2;
			row.splice(i + 1, 1);
			row.push(0);
			return row
		}
		
	}

}

function gameOver() {
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			if (grid[i][j] != 0) {
				count ++;
			}
		}
	}
	console.log(count);
}

//Addevent listener

document.addEventListener('keydown', event => {
	count = 0;
	gameOver();
	if (count == 16) {
		alert('Game Over');
		return
	}
	if (event.keyCode == 37) {
		for (let i = 0; i < 4; i ++) {
			grid[i] = flingTotheLeft(grid[i]);
			mergeEqual(grid[i]);
		}	
		addItem();
		drawItem();
	}
});

















