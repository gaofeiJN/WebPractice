// WritableStream是数据最终的目的地
// 构造函数 WritableStream( underlyingSink:Object )
// 底层数据槽underlyingSink中的write()方法可以访问写入的数据：write( value ) {}
let stream = new WritableStream({
    // 访问写入的数据
    write(chunk) {
        console.log(chunk);
    }
});
console.log('WritableStream : ');
console.log(stream);
stream.ab

// 用WritableStreamDefaultWriter对象向WritableStream中写入数据
// WritableStream.getWriter()方法返回一个WritableStreamDefaultWriter对象
// 写入数据前，先检查writer是否可以写入数据。WritableStreamDefaultWriter.ready是一个期约，当可以向流中写入数据是兑现
let writer = stream.getWriter();
console.log('WritableStreamDefaultWriter : ');
console.log(writer);

// 在生产者producer中调用WritableStreamDefaultWriter.write()和WritableStreamDefaultWriter.close()
async function producer() {
    for (let i = 0; i < 5; i++) {
        await writer.ready;
        writer.write(i);
    }
    // 所有数据写入完毕后，关闭流
    writer.close();
}
producer();