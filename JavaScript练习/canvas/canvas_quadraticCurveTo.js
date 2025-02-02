// canvas & context
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// initial
let start = [10, 220];
let control = [150, 100];
let stop = [300, 220];
draw();

// 时间监听器
canvas.addEventListener('click', (e) => {
    if (e.ctrlKey){
        control=[e.clientX, e.clientY];
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
    context.quadraticCurveTo(...control, ...stop);
    context.stroke();

    // 点
    context.strokeStyle = '#ff0000';
    context.beginPath();
    context.rect(start[0] - 4, start[1] - 4, 8, 8);
    context.rect(stop[0] - 4, stop[1] - 4, 8, 8);
    context.rect(control[0] - 4, control[1] - 4, 8, 8);
    context.stroke();

    // 线
    context.beginPath();
    context.moveTo(...start);
    context.lineTo(...control);
    context.lineTo(...stop);
    context.stroke();
}