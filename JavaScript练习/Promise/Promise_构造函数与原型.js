// resolved
let prom1=new Promise((resolve, reject) => {
    resolve('promise resolved');
});
console.log(Promise);
console.log(Promise.prototype);
console.log(prom1);
// [[PromiseState]]:"resolved"
// [[PromiseResult]]:promise resolved

// rejected
let prom2=new Promise((resolve, reject) => {reject('promise rejected');});
console.log(prom2);
// [[PromiseState]]:"rejected"
// [[PromiseResult]]:promise rejected

// pending
let prom3=new Promise(() => {});
console.log(prom3);
// [[PromiseState]]:"pending"
// [[PromiseResult]]:undefined