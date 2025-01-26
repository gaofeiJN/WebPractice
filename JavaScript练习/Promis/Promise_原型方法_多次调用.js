//
let pro1 = new Promise(res => {
    res('pro1 is initialized to resolved');
});

pro1.then(() => {
    console.log('pro1 resolveHandler1')
});
pro1.then(() => {
    console.log('pro1 resolveHandler2')
});
pro1.then(() => {
    console.log('pro1 resolveHandler3')
});
pro1.finally(() => {
    console.log('pro1 finallyHandler1')
});
pro1.finally(() => {
    console.log('pro1 finallyHandler2')
});

//
let pro2 = new Promise((res, rej) => {
    rej('pro1 is initialized to rejected ');
});

pro2.then(() => {
        console.log('pro2 resolveHandler1')
    },
    () => {
        console.log('pro2 rejectHandler1')
    });
pro2.then(() => {
        console.log('pro2 resolveHandler2')
    },
    () => {
        console.log('pro2 rejectHandler2')
    });
pro2.catch(() => {
    console.log('pro2 rejectHandler3')
});
pro2.finally(fin => {
    console.log('pro2 finallyHandler1')
});
pro2.finally(fin => {
    console.log('pro2 finallyHandler2')
});

// pro1 resolveHandler1
// pro1 resolveHandler2
// pro1 resolveHandler3
// pro1 finallyHandler1
// pro1 finallyHandler2
// pro2 rejectHandler1
// pro2 rejectHandler2
// pro2 rejectHandler3
// pro2 finallyHandler1
// pro2 finallyHandler2