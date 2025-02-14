self.onmessage = function (e) {
    let view = new Int32Array(e.data);
    console.log("---worker: 开始执行运算----------");
    for (let i = 0; i < 1e6; i++) {
        // 不安全的运算方法
        view[0] += 1;

        // 安全的运算方法：使用Atomics进行原子运算
        // Atomics.add(view,0,1);
    }

    // 运算完成，通知main线程
    self.postMessage("done");
}