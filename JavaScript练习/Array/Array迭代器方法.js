// Array实现了Iterable接口
console.log('Array.prototype[Symbol.iterator]---------------');
let arr1 = [1, 2, 3];
console.log(arr1[Symbol.iterator]);

let iter1 = arr1[Symbol.iterator]();
console.log(iter1);

for (let t of iter1) {
    console.log(t);
}

// entries(),keys(),values()
console.log('array.entries()---------------');
let entr1 = arr1.entries();
for (let t of entr1) {
    console.log(t);
}
console.log('array.keys()---------------');
let keys1 = arr1.keys();
for (let t of keys1) {
    console.log(t);
}
console.log('array.values()---------------');
let values1 = arr1.values();
for (let t of values1) {
    console.log(t);
}

// 用生成器函数模拟entries(),keys(),values()
class MyArray {
    constructor() {
        this.array = new Array(1, 2, 3, 4, 5);
    }

    * keys() {
        for (let i = 0; i < this.array.length; i++) {
            yield i;
        }
    }

    * values() {
        for (let i = 0; i < this.array.length; i++) {
            yield this.array[i];
        }
    }

    * entries() {
        for (let i = 0; i < this.array.length; i++) {
            yield [i,this.array[i]];
        }
    }
}

// entries(),keys(),values()
let myArray = new MyArray();
console.log('myArray.entries()---------------');
let entr2 = myArray.entries();
for (let t of entr2) {
    console.log(t);
}
console.log('myArray.keys()---------------');
let keys2 = myArray.keys();
for (let t of keys2) {
    console.log(t);
}
console.log('myArray.values()---------------');
let values2 = myArray.values();
for (let t of values2) {
    console.log(t);
}