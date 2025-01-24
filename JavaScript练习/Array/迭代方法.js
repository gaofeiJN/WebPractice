let arr1 = [1, 2, 3, 4, 5, 6];

// forEach()
arr1.forEach((item, index, array) => {
    console.log(`value:`);
    console.log(item);
});
//
console.log('----------');
// some()
console.log(arr1.some((item, index, array) => {
    return item > 5;
}))

// every()
console.log(arr1.every((item, index, array) => {
    return item > 0;
}))

// filter()
console.log(arr1.filter((item, index, array) => {
    return item > 2;
}))

// map(),flatMap()
console.log(arr1.map((item, index, array) => {
    return item * 2;
}))

// 手写迭代方法
class MyClass {
    constructor(name) {
        this.arr = [1, 2, 3, 4, 5, 6];
    }

    * [Symbol.iterator]() {
        yield* this.arr;
    }

    every(judge) {
        for (let [index, value] of this.arr.entries()) {
            let flag = judge(value, index, this.arr);
            if (!flag) {
                return false
            }
        }
        return true;
    }

    some(judge) {
        for (let [index, value] of this.arr.entries()) {
            let flag = judge(value, index, this.arr);
            if (flag) {
                return true
            }
        }
        return false;
    }
}

let myClass = new MyClass();
console.log('----------');
console.log(myClass.every((item, index, array) => {
    return item > 3;
}));
console.log('----------');
console.log(myClass.every((item, index, array) => {
    return item < 9;
}));
console.log('----------');
console.log(myClass.every((item, index, array) => {
    return item > 0;
}));
console.log('----------');
console.log(myClass.some((item, index, array) => {
    return item > 3;
}));
console.log('----------');
console.log(myClass.some((item, index, array) => {
    return item < 0;
}));