// ！！！ 查看SharedWorker的控制台打印的方法！！！
// chrome://inspect/#workers

// 保存所有连接到本线程的端口
let ports = new Set();
console.log("---SharedWorker ---");

//
self.onconnect = function (e) {
    console.log("---SharedWorker: 接收到新的连接------");
    let port = e.ports[0];
    ports.add(port);

    port.onmessage = function (event) {
        console.log(event);
        console.log(`---SharedWorker: 接收到来自页面的消息 ${event.data}------`);
        console.log(ports.size);
        for (let p of ports) {
            p.postMessage(`---SharedWorker: 转发消息 ${event.data}------`);
        }
    }
}