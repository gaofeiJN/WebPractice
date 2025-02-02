// context 2d
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let grad = ctx.createRadialGradient(400, 400, 400, 600, 400, 100);
// grad.addColorStop(0, '#f00');
// grad.addColorStop(0.25, '#fff');
// grad.addColorStop(0.5, '#00f');
// grad.addColorStop(0.75, '#fff');
grad.addColorStop(0, '#00f');
grad.addColorStop(0.5, '#fff');
grad.addColorStop(1, '#f00');

//
ctx.fillStyle = grad;
ctx.strokeStyle = grad;

//
ctx.fillRect(0, 0, canvas.width, canvas.height);