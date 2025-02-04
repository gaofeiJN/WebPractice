// pipeThrough( stream:TransformStream ):ReadableStream

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

// 创建TransformStream
let transform = new TransformStream({
    transform(chunk, controller) {
        controller.enqueue(chunk * 3);
    }
}, {
    highWaterMark: 5,
});

// 调用ReadableStream.pipeThrough()方法
let newReadable = readable.pipeThrough(transform);
// 从新ReadableStream读取数据
let newReader = newReadable.getReader();
(async function () {
    let {done, value} = await newReader.read();
    while (!done) {
        console.log('---read from the new ReadableStream :');
        console.log(value);
        ({done, value} = await newReader.read());
    }
    console.log('---newReadable : reading end');
})();