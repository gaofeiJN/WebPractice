// FileReaderSync只能在工作者线程中使用
// worker.js
self.onmessage = (e) => {
    // 创建FileReaderSync对象
    const syncReader=new FileReaderSync();
    console.log(syncReader);

    // 读取消息中发送过来的文件,同步读取会阻塞线程
    let result = syncReader.readAsDataURL(e.data);
    console.log(result);
    
    // 将数据的URL发送回去
    self.postMessage(result);
}