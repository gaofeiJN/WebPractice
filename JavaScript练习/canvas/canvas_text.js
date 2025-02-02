//
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 设置drawing state
const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, '#ff0000');
gradient.addColorStop(0.5, '#ffffff');
gradient.addColorStop(1, '#0000ff');
ctx.fillStyle = gradient;
ctx.strokeStyle = '#000000';
ctx.lineWidth = 2;
ctx.font = '100px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// 绘制文本
ctx.fillText('Hello World!', canvas.width/2,canvas.height/2);
ctx.strokeText('Hello World!', canvas.width/2,canvas.height/2);
