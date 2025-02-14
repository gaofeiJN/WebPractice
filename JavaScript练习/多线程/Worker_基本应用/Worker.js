console.log("---我是工作者线程----------");
console.log(self);

// 事件监听器
self.onmessage = (e) => {
    console.log(e);
    console.log(`工作者线程收到来自主线程的消息： ${e.data}`);

    // 在工作者线程一侧关闭：close()
    // 1.已在事件循环中的事件全部取消
    // 2.停止向事件循环添加新事件
    // 3.目前的同步操作继续执行
    if (e.data === "please close") {
        console.log("---worker:收到来自main的关闭请求----------");
        console.log("---worker:关闭 before----------");
        self.close();
        console.log("---worker:关闭 after----------");
        setTimeout(() => {
            console.log("---worker:已执行关闭请求----------")
        }, 0);
    }
}

self.onerror = (e) => {
    console.log(e);
}

self.onmessageerror = (e) => {
    console.log(e);
}

// 向主线程发送消息
self.postMessage("你好，main，我是worker");