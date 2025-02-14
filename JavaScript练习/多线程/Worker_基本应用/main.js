// 用Worker构造函数创建新的工作者线程
// Worker()
console.log("---我是主线程----------");
console.log("---创建工作者线程 before----------");
let worker = new Worker("Worker.js");
console.log("---创建工作者线程 after----------");
console.log(worker);

// 事件监听器
worker.onerror = (e) => {
    console.log(e);
    worker.terminate();
}

worker.onmessage = (e) => {
    console.log(e);
    console.log(e.data);
}

// 向工作者线程发送消息
worker.postMessage("你好，worker，我是main");

// 在工作者线程一侧关闭工作者线程
const closea = document.getElementById("close-a");
closea.onclick = function () {
    worker.postMessage("please close");
}

// 在工作者线程一侧关闭工作者线程
// 调用了terminate()时，工作者线程的消息队列会立即清理并锁住，无法再发送消息
const closeb = document.getElementById("close-b");
closeb.onclick = function () {
    console.log("---main:关闭工作者线程 before----------");
    worker.terminate();
    console.log("---main:关闭工作者线程 after----------");
    worker.postMessage("hello world!");                 // 不会发送
}

// 使用ObjectURL在js行内创建工作者线程
console.log("---在行内创建工作者线程----------");
let jsString = "self.postMessage('hello,我是行内创建的工作者线程！');"
let blob = new Blob([jsString], {type: "text/javascript"});
let url = URL.createObjectURL(blob);
let worker2 = new Worker(url);
worker2.onmessage = (e) => {
    console.log(e.data);
    worker2.terminate();
}