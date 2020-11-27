// Canvas initial
let canvas = document.querySelector('#canvas');
let pen = canvas.getContext('2d');
let w;
canvas.width = 600;
canvas.height = 600;
canvas.style.backgroundColor = 'rgba(238, 228, 218, 0.35)';
canvas.style.border = '1px solid black';
canvas.style.display = 'block';
canvas.style.margin = 'auto';
w = canvas.width / 4;

//Grid and state at beginning
let grid = [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	];

let begin = true;
let direction;
let rdx;
let rdy;
let value;
let turn = 0;

//Random 2 numbers at begining
randomTwoNumber();
drawCanvas();

function randomTwoNumber() {
	addNumber();
	addNumber();
	begin = false;
}

function randomNumber(arr) {
 	return arr[Math.floor(Math.random() * arr.length)];
}

function addNumber() {
	let options = [];
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			if (grid[i][j] == 0) {
				options.push({x: i, y: j});
			}
		}
	}
	if (options.length > 0) {
		let check = checkRandom();
		if (check == true) {
			let r = Math.random() * 1;
			let element = randomNumber(options);
			rdx = element.x;
			rdy = element.y;
			grid[element.x][element.y] = r > 0.5 ? 2 : 4;
			value = grid[element.x][element.y];
			console.log(rdx, rdy);
		}
	}
}

function drawCanvas() {
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
	if (turn > 0) {
		pen.beginPath();
		pen.clearRect(rdy * w, rdx * w, w, w);
		pen.fillStyle = '#ff6f61';
		pen.fillRect(rdy * w, rdx * w, w, w);
		pen.beginPath();
		pen.fillStyle = 'white';
		pen.fillText(value, rdy * w + w/2, rdx * w + w/2);
	}

}

//Slide and Combine the same value
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

// Rotate Grid when press UP or DOWN button
function rotateGrid(grid) {
	let newgrid = [];
	for (let i = 0; i < 4; i ++) {
		newgrid.push([]);
	}
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			newgrid[j].push(grid[i][j]);
		}
	}
	return newgrid;

}

//Check row or column is filled or empty
function checkEmptyRow() {
	let empty = 0;
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			if (grid[i][j] == 0) {
				empty ++;
			}
		}
	}
	if (empty > 0) return true
	if (empty == 0) return false
}

function checkEmptyColumn() {
	let empty = 0;
	let gridRotate = rotateGrid(grid);
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			if (gridRotate[i][j] == 0) {
				empty ++;
			}
		}
	}
	if (empty > 0) return true
	if (empty == 0) return false
}

//Check 2 values equal beside eachother
function checkValueRow() {
	let count = 0;
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 3; j ++) {
			if ((grid[i][j] == grid[i][j+1])) {
				count ++;
			}
		}
	}
	if (count > 0) return true
	if (count == 0) return false
}

function checkValueColumn() {
	let count = 0;
	let gridRotate = rotateGrid(grid);
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 3; j ++) {
			if ((gridRotate[i][j] == gridRotate[i][j+1])) {
				count ++;
			}
		}
	}
	if (count > 0) return true
	if (count == 0) return false
}

//Check condition when the function randomNumber is called
function checkRandom() {
	let count = 0;
	if (begin == true) return true
	if (begin == false) {
		if (direction == 'left') {
			for (let i = 0; i < 4; i ++) {
				if (grid[i][0] != 0) {
					count ++;
				}
			}
		}
		if (direction == 'right') {
			for (let i = 0; i < 4; i ++) {
				if (grid[i][3] != 0) {
					count ++;
				}
			}
		}
		if (direction == 'up') {
			grid = rotateGrid(grid);
			for (let i = 0; i < 4; i ++) {
				if (grid[i][0] != 0) {
					count ++;
				}
			}
			grid = rotateGrid(grid);
		}
		if (direction == 'down') {
				grid = rotateGrid(grid);
			for (let i = 0; i < 4; i ++) {
				if (grid[i][3] != 0) {
					count ++;
				}
			}
			grid = rotateGrid(grid);
		}

		if (count == 4) return false
		else return true
	}
}

//addEventlistener for Press keyboard
document.addEventListener('keydown', event => {
	switch(event.keyCode) {
		case 37:
		direction = 'left';
		turn ++;
		break
		case 39:
		direction = 'right';
		turn ++;
		break
		case 38:
		direction = 'up';
		turn ++;
		break
		case 40:
		direction = 'down';
		turn ++;
		break
	}

	if (event.keyCode == 37 || event.keyCode == 39) {
		let valueRow = checkValueRow();
		let emptyRow = checkEmptyRow();
		if (valueRow == true || emptyRow == true) {
			for (let i = 0; i < 4; i ++) {
				grid[i] = slideRow(grid[i], direction);
				combineRow(grid[i], direction);
			}
			addNumber();
			drawCanvas();
			console.log(grid);
		} else return
	}

	else if (event.keyCode == 38 || event.keyCode == 40) {
		let valueColumn = checkValueColumn();
		let emptyColumn = checkEmptyColumn();

		if (valueColumn == true || emptyColumn == true) {
			let newGrid = rotateGrid(grid);
			for (let i = 0; i < 4; i ++) {
				newGrid[i] = slideRow(newGrid[i], direction);
				combineRow(newGrid[i], direction);
			}
			grid = rotateGrid(newGrid);
			addNumber();
			drawCanvas();
			console.log(grid);
		} else return
	}
});
