// canvas & context
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// initial
let start = [100, 20];
let control = [200, 20];
let stop = [300, 220];
draw();

// 时间监听器
canvas.addEventListener('click', (e) => {
    if (e.ctrlKey){
        start=[e.clientX, e.clientY];
        draw();
    } else if (e.shiftKey){
        control=[e.clientX, e.clientY];
        draw();
    } else if (e.altKey){
        stop=[e.clientX, e.clientY];
        draw();
    }
})

// 绘制路径
function draw() {
    // reset
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制弧线
    context.strokeStyle = '#0000ff';
    context.lineWidth = 1;
    context.beginPath();
    // context.moveTo(...start);
    // context.arcTo(...control, ...stop, 150);
    context.moveTo(start[0], start[1]);
    context.arcTo(control[0], control[1], stop[0], stop[1], 100);
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