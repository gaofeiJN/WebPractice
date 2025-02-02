let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

// 设置绘图状态drawing state
ctx.lineWidth = 2;
ctx.fillStyle = '#aabbff';
ctx.strokeStyle = '#ff0000';

// points
let p1 = [10, 10];
let p2 = [110, 10];
let p3 = [110, 110];
let p4 = [10, 110];

// 路径path
ctx.beginPath();
ctx.moveTo(...p1);
ctx.lineTo(...p2);
ctx.lineTo(...p3);
ctx.lineTo(...p4);
ctx.closePath();
ctx.stroke();

// lineCap : butt(默认）, round, square
let p11 = [60, 25];
let p12 = [160, 25];
let p21 = [60, 150];
let p22 = [160, 150];
let p31 = [60, 250];
let p32 = [160, 250];
ctx.lineWidth = 40;

// butt
ctx.beginPath();
ctx.lineCap = 'butt';
ctx.moveTo(...p11);
ctx.lineTo(...p12);
ctx.stroke();

// round
ctx.beginPath();
ctx.lineCap = 'round';
ctx.moveTo(...p21);
ctx.lineTo(...p22);
ctx.stroke();

// square
ctx.beginPath();
ctx.lineCap = 'square';
ctx.moveTo(...p31);
ctx.lineTo(...p32);
ctx.stroke();

// 辅助线
ctx.lineWidth = 1;
ctx.strokeStyle = '#0000ff';
ctx.beginPath();
ctx.moveTo(10, 150);
ctx.lineTo(200, 150);
ctx.moveTo(10, 130);
ctx.lineTo(200, 130);
ctx.moveTo(10, 170);
ctx.lineTo(200, 170);

ctx.moveTo(40, 10);
ctx.lineTo(40, 200);
ctx.moveTo(60, 10);
ctx.lineTo(60, 200);
ctx.moveTo(80, 10);
ctx.lineTo(80, 200);

ctx.stroke();

// 绘制矩形
ctx.beginPath();
ctx.rect(20,400,250,150);
ctx.stroke();
ctx.beginPath();
ctx.rect(300,400,250,150);
ctx.fill();
ctx.stroke();

// 绘制弧线
ctx.beginPath();
ctx.moveTo(400,20);
ctx.arc(600,200,90,0,Math.PI,false);
ctx.stroke();

// 绘制弧线2
ctx.beginPath();
ctx.moveTo(20,600);
ctx.arcTo(100,600,100,690,50);
ctx.stroke();