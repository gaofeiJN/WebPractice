// 线程池类
class WorkerPool {
    // size: 线程数量
    // url: 工作者线程的脚本的url
    constructor(size, url) {
        // 属性
        // taskQueue 任务队列，{ resolve, reject, task }
        //           任务会被封装到Promise中
        this.taskQueue = [];
        // workers 工作者线程数组
        this.workers = [];
        // size 工作者线程的数量，等于workers.length
        this.size = size;

        // 创建TaskWorker对象时，将WorkerPool的dispatch方法作为回调传给TaskWorker的构造函数
        // 每当TaskWorker对象空闲时，就调用WorkerPool.dispatch()方法
        // 用箭头函数定义回调，保证了dispatch()是在WorkerPool对象上调用的
        for (let i = 0; i < size; i++) {
            this.workers.push(
                new TaskWorker(() => this.dispatchTask(), url, {name: "worker" + i})
            );
        }
    }

    // 把任务添加到taskQueue中，并返回代表该任务的期约
    enqueueTask(task) {
        let promise = new Promise((resolve, reject) => {
            this.taskQueue.push({resolve, reject, task});
        });

        this.dispatchTask();
        return promise;
    }

    // 给线程池中的线程分派任务
    dispatchTask() {
        // 如果任务队列中没有任务了，则返回
        if (this.taskQueue.length === 0) {
            return;
        }

        // 从taskQueue中取出第一个task，分配给workers中的第一个空闲线程
        for (let worker of this.workers) {
            if (worker.available) {
                worker.executeTask(this.taskQueue.shift());
                break;
            }
        }
    }
}

//
class TaskWorker extends Worker {
    //
    constructor(notifyAvailable, url, options) {
        // Worker
        super(url, options);
        this.available = false;
        this.notifyAvailable = notifyAvailable;

        // 仅在初始化时，执行次监听器
        // 工作者初始化完成后，向主线程发送一个包含结果的message，和一个"ready"的message
        this.onmessage = function (event) {
            if (event.data === "ready") {
                this.setAvailable();
            }
        }
    }

    // WorkerPool
    executeTask({resolve, reject, task}) {
        this.available = false;
        this.postMessage(task);

        this.onmessage = function (event) {
            resolve(event.data);
            this.setAvailable();
        }

        this.onerror = function (event) {
            reject(event);
            this.setAvailable();
        }
    }

    //
    setAvailable() {
        this.available = true;
        this.notifyAvailable();
    }
}

// 导出
export {WorkerPool, TaskWorker};