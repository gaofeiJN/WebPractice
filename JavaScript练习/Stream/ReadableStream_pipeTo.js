// pipeTo( stream:WritableStream ):Promise

// 创建ReadableStream
let readable = new ReadableStream({
    async start(controller) {
        for (let i = 0; i < 5; i++) {
            controller.enqueue(await new Promise(resolve => setTimeout(resolve, 1000, i)));
            console.log(`---Readable : enqueue ${i}`);
        }
        controller.close();
        console.log('---Readable : enqueueing end');
    }
}, {
    highWaterMark: 5,
});

// 创建WritableStream
let writable = new WritableStream({
    write(chunk, controller) {
        console.log(`---Writable : chunk is ${chunk}`);
    }
}, {
    highWaterMark: 5,
});

// 调用ReadableStream.pipeTo()方法
let promise = readable.pipeTo(writable);
console.log(promise);
