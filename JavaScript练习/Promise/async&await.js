console.log('---async----------------------');
// 无返回值
async function fun1() {
    console.log('async function : no return ');
}

fun1().then(() => {
    console.log('async function : no return ==> on resolved');
});

// 返回普通值
async function fun2() {
    console.log('async function : return a value ');
    return 'gao fei';
}

fun2().then(() => {
    console.log('async function : return a value ==> on resolved');
})

// 返回Thenable对象
async function fun3() {
    console.log('async function : return a Thenable object ');
    let obj1 = {
        then(callback) {
            callback('async function : return a Thenable object ==> on resolved');
        }
    }
    return obj1;
}

fun3().then(console.log);

// 返回期约对象
async function fun4() {
    console.log('async function : return a Promise object ');
    return Promise.resolve();
}

fun4().then(()=>{
    console.log('async function : return a Promise object ==> on resolved');
});

// 抛出错误
let fun5=async function(){
    console.log('async function : throw a value');
    throw 'hello world';
}

fun5().catch(()=>{
    console.log('async function : throw a value ==> on rejected');
});

// 返回拒绝的期约
let fun6=async () =>{
    console.log('async function : return a rejected Promise');
    return Promise.reject();
}

fun6().catch(()=>{
    console.log('async function : return a rejected Promise ==> on rejected');
});

// await
console.log('---await----------------------');

// undefined
async function funa(){
    console.log(await undefined);
}
funa();

// value
async function funb(){
    console.log(await 'string');
}
funb();

// Thenable object
async function func(){
    let obj1={
        then(callback){
            callback('Thenable object');
        }
    }
    console.log(await obj1);
}
func();

// resolved promise
async function fund(){
    console.log(await Promise.resolve('resolved promise'));
    console.log('resolved promise : after await');
}
fund();

// rejected promise
async function fune(){
    console.log(await Promise.reject('rejected promise'));
    console.log('rejected promise : after await');
}
fune().catch((reason)=>{
    console.log('rejected promise : on rejected ' + reason);
});

// throw a value
async function funf(){
    console.log(await (()=>{throw 'threw value';})());
    console.log('rejected promise : after await');
}
funf().catch((reason)=>{
    console.log('threw value : on rejected ' + reason);
});