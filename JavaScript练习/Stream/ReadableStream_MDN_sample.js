// elements
const reset = document.getElementById('reset');
const read = document.getElementById('read');
const input = document.querySelector('.input ul');
const output = document.querySelector('.output ul');
const result = document.querySelector('p');

//global
let timeID;
let stream;
let streamController;

// reset & create ReadableStream
reset.addEventListener('click', () => {
    // reset
    input.innerHTML = '';
    output.innerHTML = '';
    result.innerHTML = '';

    // 创建可读流ReadableStream
    stream = new ReadableStream(
        {
            // start()方法，创建ReadableStream对象之后立即调用
            start(controller) {
                // 以异步方式，每隔一段时间往内部队列中填充数据
                timeID = setInterval(() => {
                    let string = makeRandomString();
                    controller.enqueue(string);

                    let node = document.createElement('li');
                    node.innerHTML = `${string}`;
                    input.appendChild(node);
                }, 300);
                // 取得controller的引用，以在外部关闭
                streamController = controller;
            },
            // pull()方法，
            // 在start()方法执行完之后，
            // 如果ReadableStream的内部队列不满，那么pull()会被重复调用，直到内部队列填满
            pull() {

            },
            // cancel()方法
            cancel(reason) {
                clearInterval(timeID);
                console.log(reason);
            }
        },
        {
            highWaterMark: 100,
        }
    );
});

// 从可读流中读取数据
read.addEventListener('click', () => {
    // local
    let total = '';
    let promise;

    // 停止可读流的数据填充
    clearInterval(timeID);
    // 关闭controller
    // 【注意】当确定不再需要向流中填充数据是，必须关闭controller，否则读取完所有数据后，下一次读取的Promise将处于pending状态！！！
    streamController.close();

    // 以异步的方式，从可读流中读取数据
    let reader = stream.getReader();
    promise = reader.read();
    // console.log(promise);
    promise.then(function handler({done, value}) {
            // 所有数据读取完毕
            if (done) {
                console.log("Stream complete");
                result.innerHTML = `${total}`;
                return;
            }

            // 读取数据
            total += value;
            let node = document.createElement('li');
            node.innerHTML = `${value}`;
            output.appendChild(node);

            // 递归调用：读取下一条，并再次调用handler
            promise = reader.read();
            // console.log(promise);
            return promise.then(handler);
        });
});

// 生成随机字符串
function makeRandomString() {
    //
    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let string = '';

    for (let i = 0; i < 8; i++) {
        string += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return string;
}