// 使用代理实现动态属性

// 默认情况下，对象属性的值是不变的
let target = {
    time: new Date().toLocaleTimeString(),
}
console.log('---static sync----------');
console.log(target.time);
console.log(target);

async function fun1() {
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log('---static async : sleep 3000ms---');
            resolve();
        }, 3000);
    });
    console.log(target.time);
    console.log(target);
}

fun1();

// 使用代理
let handler = {
    get(target, prop, receiver) {
        console.log('---dynamic----------');
        let runtime = new Date().toLocaleTimeString();
        Reflect.set(target, prop, runtime, receiver);
        return Reflect.get(...arguments);
    }
}
let proxy = new Proxy(target, handler);
console.log(proxy.time);            // 22:13:48
console.log(proxy);                 // 22:13:48

async function fun2() {
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log('---dynamic async : sleep 3000ms---');
            resolve();
        }, 3000);
    });
    console.log(proxy.time);        // 22:13:51
    console.log(proxy);             // 22:13:51
}

fun2();