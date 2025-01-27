//then<TResult1,TResult2>(
//      onfulfilled?: ((value: T) => (PromiseLike<TResult1> | TResult1)) | undefined | null,
//      onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null,
//  ): Promise<TResult1 | TResult2>
let pro1 = new Promise((resolve, reject) => {
    resolve('Promise pro1 is initialized to resolved');
});
let pro2 = pro1.then(res => {
    console.log('Promise pro1 onresolved ');
    return 'Promise pro2 resolved';
});
console.log(pro1);
console.log(pro2);

// catch<TResult>(
//      onrejected?: ((reason: any) => (PromiseLike<TResult> | TResult)) | undefined | null,
//  ): Promise<T | TResult>
let pro3=pro1.catch(err => {
    console.log('Promise pro1 onrejected ');
});
console.log(pro3);

// finally(
let pro4=pro1.finally(res => {
    console.log('Promise pro1 onfinally ');
})
console.log(pro4);

//
let pro5=Promise.reject('Promise pro5 is initialized to resolved');
let pro6=pro5.finally(res => {
    console.log('Promise pro5 onrejected ');
});
console.log(pro5);
console.log(pro6);