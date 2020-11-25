
let canvas = document.getElementById('canvas');
let pen = canvas.getContext('2d');
class Ticandtoe {
  constructor (row, col, block) {
    this.row = row;
    this.col = col;
    this.block = block;
    this.arr = [];
    canvas.width = this.col * this.block;
    canvas.height = this.row * this.block;
    this.turnX = true;
  }

  draw() {
    pen.strokeStyle = '#ccc';
    for (let i = 0; i < this.col; i ++) {
      pen.beginPath();
      pen.moveTo(0, i * this.block);
      pen.lineTo(this.row * this.block, i * this.block);
      pen.stroke();
    }
    for (let i = 0; i < this.col; i ++) {
      pen.beginPath();
      pen.moveTo(i * this.block, 0);
      pen.lineTo(i * this.block, this.col * this.block);
      pen.stroke();
    }
  }

  createData() {
    for (let i = 0; i < this.col; i ++) {
      this.arr[i] = [];
      for (let j = 0; j < this.row; j ++) {
        this.arr[i][j] = 0;
      }
    }
    console.log(this.arr);
  }

  update(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    let distanceX = Math.floor(x/this.block);
    let distanceY = Math.floor(y/this.block);
    console.log(distanceX, distanceY);
    if (this.turnX == true) {
      this.arr[distanceX][distanceY] = 1;
      console.log(this.arr);
    } else  {
      this.arr[distanceX][distanceY] = 2;
      console.log(this.arr);
    }
    this.turnX = !this.turnX;
  }

  drawXO(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    let distanceX = Math.floor(x/this.block);
    let distanceY = Math.floor(y/this.block);
    if (this.turnX == true) {
      pen.textAlign = 'center';
      pen.strokeStyle = 'red';
      pen.beginPath();
      pen.moveTo(distanceX * this.block + 5, distanceY * this.block + 5);
      pen.lineTo(distanceX * this.block + 35, distanceY * this.block + 35);
      pen.stroke();
      pen.closePath();
      pen.moveTo(distanceX * this.block + 35, distanceY * this.block + 5);
      pen.lineTo(distanceX * this.block + 5, distanceY * this.block + 35);
      pen.stroke();
      pen.closePath();
    } else {
      pen.textAlign = 'center';
      pen.strokeStyle = 'blue';
      pen.beginPath();
      pen.arc(distanceX * this.block + this.block/2, distanceY * this.block + this.block/2, 15, 0, 2 * Math.PI);
      pen.stroke();
    }
  }

  checkWin(e) {
    let count = 0;
    let x = e.offsetX;
    let y = e.offsetY;
    let distanceX = Math.floor(x/this.block);
    let distanceY = Math.floor(y/this.block);
    let newx = distanceX * this.block;
    let newy = distanceY * this.block;
    for (let i = distanceX; i < this.arr.col; i ++) {
      if (this.arr[distanceY][i] == this.arr[distanceY][i+1]) {
        count ++;
      }

    }
    console.log(count);
    console.log(this.arr);

    // for (let i = distanceX; i > 0; i --) {
    //   if (this.arr[distanceY][i] == this.arr[distanceY][i-1]) {
    //     count ++;
    //   }
    // }
    //
    // for (let i = distanceY; i < this.arr.row; i ++) {
    //   if (this.arr[distanceX][i] == this.arr[distanceX][i+1]) {
    //     count ++;
    //   }
    // }
    //
    // for (let i = distanceY; i > 0; i --) {
    //   if (this.arr[distanceY][i] == this.arr[distanceY][i-1]) {
    //     count ++;
    //   }
    // }
    //
    // for (let i = distanceX; i < this.arr.col; i ++) {
    //   if (this.arr[distanceY][i] == this.arr[distanceY][i+1]) {
    //     count ++;
    //   }
    // }
    //
    // for (let i = distanceX; i < this.arr.col; i ++) {
    //   if (this.arr[distanceY][i] == this.arr[distanceY][i+1]) {
    //     count ++;
    //   }
    // }
    //
    // for (let i = distanceX; i < this.arr.col; i ++) {
    //   if (this.arr[distanceY][i] == this.arr[distanceY][i+1]) {
    //     count ++;
    //   }
    // }
    //
    // for (let i = distanceX; i < this.arr.col; i ++) {
    //   if (this.arr[distanceY][i] == this.arr[distanceY][i+1]) {
    //     count ++;
    //   }
    // }
    //
    // for (let i = distanceX; i < this.arr.col; i ++) {
    //   if (this.arr[distanceY][i] == this.arr[distanceY][i+1]) {
    //     count ++;
    //   }
    // }
  }

}

let tic = new Ticandtoe(20, 20, 40);
tic.draw();
tic.createData();

canvas.addEventListener('click', (event) => {
  tic.update(event);
  tic.drawXO(event);
  tic.checkWin(event);

});
