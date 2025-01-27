setTimeout(() => {
    console.log('---Level1 start---');
    setTimeout(()=>{
        console.log('---Level2 start---');
        setTimeout(()=>{
            console.log('---Level3 start---');
            console.log('---This is level3 !');
            console.log('---Level3 end---');
        },2000);
        console.log('---Level2 end---');
    },2000);
    console.log('---Level1 end---');
},2000);

// Promise_链式异步调用.js:2 ---Level1 start---
// Promise_链式异步调用.js:12 ---Level1 end---
// Promise_链式异步调用.js:4 ---Level2 start---
// Promise_链式异步调用.js:10 ---Level2 end---
// Promise_链式异步调用.js:6 ---Level3 start---
// Promise_链式异步调用.js:7 ---This is level3 !
// Promise_链式异步调用.js:8 ---Level3 end---