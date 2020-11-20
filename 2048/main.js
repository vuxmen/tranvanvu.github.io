

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

let empty;
let equal;

function randomItem(arr) {
 	return arr[Math.floor(Math.random() * arr.length)];
} 

function addItem() {
	let options = [];
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			if (grid[i][j] == 0) {
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

function slideRow(row, key) {
	let newarr;
	let arr = row.filter(val => val);
	let missing = 4 - arr.length;
	let zero = Array(missing).fill(0);
	if (key == 'left' || key == 'up') {
		newarr = arr.concat(zero);
	} else if (key == 'right' || key == 'down') {
		newarr = zero.concat(arr);
	}
	return newarr;
}

function combineRow(row, key) {
	if (key == 'left' || key == 'up') {
		for (let i = 0; i < 3; i ++) {
			if (row[i] == row[i + 1]) {
				row[i] *= 2;
				row.splice(i + 1, 1);
				row.push(0);
			}	
		}
	} else if (key == 'right' || key == 'down') {
		for (let i = 3; i > -1; i --) {
			if (row[i] == row[i-1]) {
				row[i] *= 2;
				row.splice(i - 1, 1);
				row.unshift(0);
			}
		}
	}
	return row
}

function rotateGrid() {
	let newgrid = [];
	for (let i = 0; i < 4; i ++) {
		newgrid.push([]);
	}
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			newgrid[j].push(grid[i][j]);
		}
	}
	grid = newgrid;
	return newgrid;
	
}

function checkEmpty() {
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			if (grid[i][j] != 0) {
				empty ++;
			}
		}
	}
}

function checkEqual() {
	equal = false;
	let copygrid;
	copygrid = rotateGrid();
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			if ((grid[i][j] == grid[i][j+1]) && (copygrid[i][j] == copygrid[i][j+1])) {
				equal = true;
				return
			}
		}
	}
}

//addEventlistener

document.addEventListener('keydown', event => {
	let direction;
	empty = 0
	equal = false;
	checkEmpty();
	checkEqual();

	switch(event.keyCode) {
		case 37:
		direction = 'left';
		break
		case 39: 
		direction = 'right';
		break
		case 38: 
		direction = 'up';
		break
		case 40: 
		direction = 'down';
		break
	}

	if (event.keyCode == 37 || event.keyCode == 39) {
		if (empty == 16 && equal == false ) {
			alert('Game Over');
			return
		}
		
		for (let i = 0; i < 4; i ++) {
			grid[i] = slideRow(grid[i], direction);
			combineRow(grid[i], direction);
		}	

		addItem();
		drawItem();
	}

	else if (event.keyCode == 38 || event.keyCode == 40) {
		rotateGrid();
		if (empty == 16 && equal == false ) {
			alert('Game Over');
			return
		}
		
		for (let i = 0; i < 4; i ++) {
			grid[i] = slideRow(grid[i], direction);
			combineRow(grid[i], direction);
		}	

		rotateGrid();
		addItem();
		drawItem();

	}

});














