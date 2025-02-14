console.log('---我是main----------');

// 创建工作者线程
let worker = new Worker("worker.js", {name: "myworker"});
worker.onmessage = function (event) {
    console.log(event.data);
}

//
const btn = document.getElementById("btn");
btn.addEventListener("click", function (event) {
    worker.postMessage("import a script");
});