// 创建一个SharedArrayBuffer
// main.js:2  Uncaught ReferenceError: SharedArrayBuffer is not defined
let buffer = new SharedArrayBuffer(4);
let view = new Int32Array(buffer);
view[0] = 0;

// 创建一个Worker数组
let workers = [];
let counter = 0;
for (let i = 0; i < 4; i++) {
    workers.push(new Worker("workers/"));

    workers[i].onmessage = (e) => {
        if (e.data === "done") {
            counter += 1;
            if (counter = workers.length) {
                console.log(`计算完成，结果为： ${view[0]}`);
            }
        }
    }
}

//
document.getElementById("sum").onclick = () => {
    for (let worker of workers) {
        worker.postMessage(buffer);
    }
}