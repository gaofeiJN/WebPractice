// Promise.resolve( value?:any ) :Promise
// value为Promise对象
let pro1=Promise.resolve();
let pro2=Promise.reject();
let pro3=new Promise((resolve,reject)=>{});
console.log(pro1);      // fulfilled
console.log(pro2);      // rejected
console.log(pro3);      // pending

console.log('---value : Promise对象--------------')
let pro4;
pro4=Promise.resolve();
console.log(pro4);      // fulfilled
pro4=Promise.resolve(pro1);
console.log(pro4);      // fulfilled
pro4=Promise.resolve(pro2);
console.log(pro4);      // rejected
pro4=Promise.resolve(pro3);
console.log(pro4);      // pending

// value为Thenable对象
console.log('---value : value为Thenable对象--------------')
let obj1={
    name:'A Thenable Object',
    age:42,
    then(){
        console.log('This is the resolve method');
        console.log('This is the reject method');
    }
}

let pro5=Promise.resolve(obj1);
console.log(pro5);
// [[PromiseState]]:"pending"
// [[PromiseResult]]:undefined
// This is the resolve method
// This is the reject method

// Promise.reject<T>( reason?:any ) :Promise<T>
console.log('---reject--------------')
pro4=Promise.reject();
console.log(pro4);      // [[PromiseState]]:rejected , [[PromiseResult]]:undefined
pro4=Promise.reject(pro1);
console.log(pro4);      // [[PromiseState]]:rejected , [[PromiseResult]]:Promise
pro4=Promise.reject(pro2);
console.log(pro4);      // [[PromiseState]]:rejected , [[PromiseResult]]:Promise
pro4=Promise.reject(pro3);
console.log(pro4);      // [[PromiseState]]:rejected , [[PromiseResult]]:Promise
pro4=Promise.reject(obj1);
console.log(pro4);      // [[PromiseState]]:rejected , [[PromiseResult]]:Object
// This is the resolve method
// This is the reject method
