let outerFn;
let pro1=new Promise(resolve=>{
    outerFn=function(){
        console.log('call resolve() in outerFunction');
        resolve("Promise pro1 is resolved in outerFunction");
        console.log('outerFn() ended');
    }
});
pro1.then(res=>{
    console.log('pro1 on resolved');
});
outerFn();