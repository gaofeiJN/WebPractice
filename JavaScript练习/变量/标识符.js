let game=Symbol('wow');

let obj1={
    1:"gao fei",     // 数字键会转化成字符串值
    2:'jinan',      // 数字键会转化成字符串值
    '2':'gaoxinqu',
    'hello world':'good morning',
    [game]:'wow'
}

for (let value of Object.values(obj1)) {
    console.log(value);
}
console.log(obj1[game]);