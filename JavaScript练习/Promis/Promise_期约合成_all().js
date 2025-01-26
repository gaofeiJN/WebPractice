// Promise.all<T>(     values: Iterable<PromiseLike<T> | T>, ): Promise<Awaited<T>[]>

// Uncaught (in promise) TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
// let all1=Promise.all();

// 空数组
let all2 = Promise.all([]);
console.log(all2);

// 期约以外的值会先用Promise.resolve()转化为期约
let all3 = Promise.all([0, 1, 'third value', 'hello world']);
console.log(all3);

// 期约
let set4 = new Set([
    Promise.resolve('promise1'),
    Promise.resolve('promise2'),
    Promise.resolve('promise3'),
    Promise.resolve('promise4')
]);
let all4=Promise.all(set4);
all4.then(function (result) {
    console.log('all4 on resolved');
});
console.log(all4);

// 任意一个pending的期约，会让all()返回的期约处于pending状态
let all5=Promise.all([
    Promise.resolve('pro51'),
    Promise.resolve('pro52'),
    new Promise(() => {
    }),
    Promise.resolve('pro54'),
]);
console.log(all5);

// 任意一个rejected的期约，会让all()返回的期约处于rejected状态,其reason为第一个rejected的期约的reason
let all6=Promise.all([
    Promise.resolve('pro51'),
    Promise.reject('reason52'),
    Promise.reject('reason53'),
    Promise.resolve('pro54'),
]);
console.log(all6);
