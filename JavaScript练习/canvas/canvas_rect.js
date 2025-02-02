// canvas元素
let canvas = document.getElementById("myCanvas");
console.log(canvas);
console.log(document);

// context 2d
let ctx = canvas.getContext("2d");
console.log(ctx);

// 绘制矩形
ctx.fillStyle = "#ff0000";
ctx.strokeStyle = "#ff0000";
ctx.fillRect(10, 10, 100, 100);
ctx.strokeRect(10, 130, 100, 100);
ctx.clearRect(40, 40, 40, 40);

// 设置绘制状态（drawing state）
ctx.lineWidth = 20;
ctx.lineJoin = "miter";
ctx.strokeRect(10, 250, 50, 50);
ctx.lineJoin = "round";
ctx.strokeRect(80, 250, 50, 50);
ctx.lineJoin = "bevel";
ctx.strokeRect(150, 250, 50, 50);

//
ctx.lineWidth = 1;
ctx.lineJoin = "miter";
ctx.shadowOffsetX=5;
ctx.shadowOffsetY=5;
ctx.shadowColor='rgba(100,100,100,0.5)';
ctx.shadowBlur = 3;
ctx.fillStyle = '#00f';
ctx.fillRect(220, 10, 100, 100);