// 创建一个MessageChannel对象
let channel = new MessageChannel();
console.log(channel);

// 创建两个Worker
let worker1 = new Worker('worker.js');
let worker2 = new Worker('worker.js');

// 将channel的两个端口分别发送给两个worker，使得它们之间可相互通信
worker1.postMessage("worker1", [channel.port1]);
worker2.postMessage("worker2", [channel.port2]);

//
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
btn1.addEventListener('click', (e) => {
   worker1.postMessage("---【main线程】往worker1发送消息");
});
btn2.addEventListener('click', (e) => {
   worker2.postMessage("---【main线程】往worker2发送消息");
});