let canvas = document.getElementById('canvas');
let pen = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 400;
canvas.style.border = '1px solid red';
canvas.style.margin = 'auto';
pen.strokeStyle = 'black';
pen.fillStyle = 'black';
pen.moveTo(100, 100);
pen.lineTo(200, 100);
pen.lineTo(100, 200);
pen.lineTo(100, 100);
pen.fill();
pen.beginPath();
pen.moveTo(120, 220);
pen.lineTo(220, 120);
pen.lineTo(220, 220);
pen.lineTo(120, 220);
pen.stroke();




