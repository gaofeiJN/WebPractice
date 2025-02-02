// context 2d
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let img = document.getElementById("myImg");
let pattern = ctx.createPattern(img, 'repeat');

ctx.fillStyle = pattern;
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// ctx.drawImage(img, 0, 0);
ctx.drawImage(img, 0, 0, canvas.width, canvas.height);