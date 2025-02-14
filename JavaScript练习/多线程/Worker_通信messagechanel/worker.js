// global
let port;
let name;

// onmessage监听器
self.onmessage = function (event) {
    console.log(event);
    // 接受来自main线程发送来的端口
    if (event.ports.length !== 0) {
        name = event.data;
        port = event.ports[0];

        // 为端口设置事件监听器
        port.onmessage = function (event) {
            console.log(`---【${name}线程】收到来自另一个worker的消息： ${event.data}`);
        }
    } else {
        console.log(`---【${name}线程】收到来自main线程的消息： ${event.data}`);
        console.log(`---【${name}线程】转发来自main线程的消息： `);
        port.postMessage(event.data);
    }
}