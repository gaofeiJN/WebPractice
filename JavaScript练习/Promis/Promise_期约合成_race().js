// Promise.race<T>(     values: Iterable<PromiseLike<T> | T>, ): Promise<Awaited<T>[]>

// Uncaught (in promise) TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
// let race1=Promise.race();

// 空数组
let race2 = Promise.race([]);
console.log(race2);

// 期约以外的值会先用Promise.resolve()转化为期约
let race3 = Promise.race([0, 1, 'third value', 'hello world']);
console.log(race3);

// 期约
let set4 = new Set([
    Promise.resolve('promise1'),
    Promise.resolve('promise2'),
    Promise.resolve('promise3'),
    Promise.resolve('promise4')
]);
let race4=Promise.race(set4);
race4.then(function (result) {
    console.log('race4 on resolved');
});
console.log(race4);

//
let race5=Promise.race([
    Promise.resolve('pro51'),
    Promise.resolve('pro52'),
    new Promise(() => {
    }),
    Promise.resolve('pro54'),
]);
console.log(race5);

//
let race6=Promise.race([
    Promise.resolve('pro51'),
    Promise.reject('reason52'),
    Promise.reject('reason53'),
    Promise.resolve('pro54'),
]);
console.log(race6);
