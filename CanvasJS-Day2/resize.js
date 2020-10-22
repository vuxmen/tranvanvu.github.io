let canvas = document.getElementById('canvas');
let pen = canvas.getContext('2d');
canvas.style.border = '1px solid red';
canvas.width = 0.9  * window.outerWidth;
canvas.height = 0.9 * window.outerHeight;
canvas.style.margin = 'auto';
console.log(canvas.width);
console.log(canvas.height);
