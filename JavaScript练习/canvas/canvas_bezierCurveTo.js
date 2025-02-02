// canvas & context
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// initial
let start = [100, 200];
let control1 = [200, 20];
let control2 = [300, 20];
let stop = [400, 200];
draw();

// 时间监听器
canvas.addEventListener('click', (e) => {
    if (e.ctrlKey){
        control1=[e.clientX, e.clientY];
        draw();
    } else if (e.shiftKey){
        control2=[e.clientX, e.clientY];
        draw();
    }
});

// 绘制路径
function draw() {
    // reset
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制弧线
    context.strokeStyle = '#0000ff';
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(...start);
    context.bezierCurveTo(...control1,...control2,...stop);
    context.stroke();

    // 点
    context.strokeStyle = '#ff0000';
    context.beginPath();
    context.rect(start[0] - 4, start[1] - 4, 8, 8);
    context.rect(control1[0] - 4, control1[1] - 4, 8, 8);
    context.rect(control2[0] - 4, control2[1] - 4, 8, 8);
    context.rect(stop[0] - 4, stop[1] - 4, 8, 8);
    context.stroke();

    // 线
    context.beginPath();
    context.moveTo(...start);
    context.lineTo(...control1);
    context.moveTo(...control2);
    context.lineTo(...stop);
    context.stroke();
}