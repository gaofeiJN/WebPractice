//
self.onmessage = function (event) {
    console.log(`${self.name} get task: ${event.data}`);
    let msg = `${event.data} dispatched to ${self.name}`;

    // to kill time
    let sum = 0;
    for (let i = 0; i < 1e6; i++) {
        sum += i;
    }

    // 返回
    self.postMessage(msg);
}

// 初始化完成后，发送"ready"
console.log(`${self.name} is ready`);
self.postMessage("ready");