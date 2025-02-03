// 可读流ReadableStream
// 是对底层数据源underlyingSource的封装，底层数据源可以把数据填充到可读流中；
// 消费者consumer可以通过可读流的公共接口读取数据

// *** 一边填充数据，一边读取数据 ***

// 生产者 ： 以异步方式，每隔一段时间产生一个块chunk
async function* into() {
    for (let i = 0; i < 10; i++) {
        yield await new Promise(resolve => setTimeout(resolve, 1000, i));
    }
}

// 创建一个可读流ReadableStream
// ReadableStream() ==> UnderlyingSource ==> start(ReadableStreamDefaultController)
// 底层数据源UnderlyingSource：在成员方法start()中，通过调用控制器controller的enqueue()方法，将生产者生成的chunk压入可读流的内部队列中
let stream1 = new ReadableStream({
    async start(controller) {
        for await (const chunk of into()) {
            controller.enqueue(chunk);
        }
        controller.close();
        console.log('---数据填充完毕----------');
    }
});

// ReadableStream的公共接口: getReader():ReadableStreamDefaultReader
let reader = stream1.getReader();

// 以异步的方式读取流内数据
async function get() {
    let {done, value} = await reader.read();
    while (!done) {
        console.log(value);
        ({done, value} = await reader.read());
    }
}
get();