// context 2d
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
console.log(grad);

grad.addColorStop(0, "#ff0000");
grad.addColorStop(0.25, "#00ff00");
grad.addColorStop(0.5, "#0000ff");
grad.addColorStop(0.75, "#00ff00");
grad.addColorStop(1, "#ff0000");

ctx.fillStyle = grad;
ctx.strokeStyle=grad;

ctx.strokeRect(100,100,100,100);
ctx.fillRect(450,450,300,300);
// ctx.fillRect(0, 0, canvas.width, canvas.height);
