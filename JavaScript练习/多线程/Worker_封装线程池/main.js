import {WorkerPool, TaskWorker} from './WorkerPool.js';

// 创建容量为4的线程池
let pool = new WorkerPool(4, "./worker.js");
console.log(pool);

// 向pool中push 20个任务
document.getElementById("btn").onclick = function () {
    let promises = [];
    for (let i = 0; i < 20; i++) {
        let p = pool.enqueueTask("hello" + i);
        // console.log(p);
        promises.push(p);
    }

    // 打印结果
    Promise.all(promises)
        .then((resolve) => {
            console.log(resolve);
        }, (reject) => {
            console.log(reject);
        });
}
