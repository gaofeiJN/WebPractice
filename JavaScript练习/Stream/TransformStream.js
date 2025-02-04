// 构造函数 TransformStream( transformer, writableQueueingStrategy, readableQueueingStrategy )
// transformer {
//     start( controller:TransformStreamDefaultController ){}
//     transform( chunk, controller:TransformStreamDefaultController ){}
//     flush( controller:TransformStreamDefaultController ){}
let {writable, readable} = new TransformStream({
    transform(chunk, controller) {
        controller.enqueue(chunk * 2);
    }
});

// 从可写端写入数据
async function* integers() {
    for (let i = 0; i < 5; i++) {
        yield await new Promise(resolve => setTimeout(resolve, 1000, i));
    }
}

async function producer() {
    let writer = writable.getWriter();

    // 异步迭代
    for await (const chunk of integers()) {
        await writer.ready;
        console.log('write to the writable side : ', chunk);
        await writer.write(chunk);
    }
    // 关闭可写端
    await writer.close();
    console.log('writing done');
}

producer();

// 从可读端读取数据
async function consumer() {
    let reader = readable.getReader();

    // 异步读取数据
    let {done, value} = await reader.read();
    while (!done) {
        console.log('read form the readable side : ', value);
        ({done, value} = await reader.read());
    }
    console.log('reading done');
}
consumer();