console.log(window);

// 请求通知权限
// chrome : 可以弹窗 ； edge : 没有弹窗 ？？
Notification.requestPermission().then(permission => {
    console.log('asked for permission');
    console.log(permission);
});

// Notification构造函数创建一个通知
// Notification对象在创建之后会立刻显示
let notify1 = new Notification('通知1');
let notify2 = new Notification('通知2', {body: "这是通知2！", image: "2.webp"});
setTimeout(() => {
    notify2.close();
},5000);

notify2.onshow=() =>{
    console.log('notification notify2 on show');
}

// 手动关闭时不触发close事件？？
notify2.onclose=() =>{
    console.log('notification notify2 closed');
}