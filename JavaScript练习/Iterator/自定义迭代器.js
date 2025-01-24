class Class1 {
    // 构造函数
    constructor(limit = 5) {
        this.limit = limit;
    }

    // 迭代器工厂函数
    [Symbol.iterator]() {
        // 每次调用迭代器工厂方法，就重置迭代次数
        let count = 1;
        let limit = this.limit;

        // 返回迭代器Iterator
        return {
            next() {
                if (count <= limit) {
                    return {done: false, value: count++};
                } else {
                    return {done: true, value: undefined};
                }
            }
        }
    }
}

// Test
let obj1 = new Class1(12);
let iter1 = obj1[Symbol.iterator]();

console.log('for (i of obj1) -----------');
for (i of obj1) {
    console.log(i);
}

// Uncaught TypeError: iter1 is not iterable
// console.log('for (i of iter1) -----------');
// for (i of iter1) {
//     console.log(i);
// }
console.log('iter1 ---------------');
let result=iter1.next();
while (result.done==false) {
    console.log(result.value);
    result=iter1.next();
}

let iter2 = obj1[Symbol.iterator]();
console.log('iter2 ---------------');
result=iter2.next();
while (result.done==false) {
    console.log(result.value);
    result=iter2.next();
}