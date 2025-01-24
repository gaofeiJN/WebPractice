// concat(     ...items: ConcatArray<T>[], ): T[]
let arr1 = [1, 3, 5];
let arr2 = [3, 4, 5];
let arr3 = [1, 2, 3, 4, 5];
let arr4 = arr1.concat(arr2, arr3);
console.log(arr1);
console.log(arr4);

// copyWithin(     target: number,     start: number,     end?: number, ): this
// copy指定的range，并赋值给指定的目标位置，range : [start,end)
// copy的时候会一次性赋值整个range的值，而不是以元素为单位执行copy==>赋值操作
console.log('array.copyWithin()-----------------');
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr5.copyWithin(0, 5);
console.log(arr5);      // [6, 7, 8, 9, 10, 6, 7, 8, 9, 10]
arr5.copyWithin(2, 1);
console.log(arr5);      // [6, 7, 7, 8, 9, 10, 6, 7, 8, 9]
arr5.copyWithin(5, 4, 8);
console.log(arr5);

// fill(     value: T,     start?: number,     end?: number, ): this
// 向指定的range中填入静态值，range : [start,end)
console.log('array.fill()-----------------');
arr1.fill(0);
arr2.fill(9, 1, 3);
arr3.fill(5, 2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// slice(     start?: number,     end?: number, ): T[]
// copy指定的range，并赋值给一个新数组，不改变原数组，range : [start,end)
console.log('array.slice()-----------------');
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr7 = arr6.slice(2, 5);
console.log(arr6);
console.log(arr7);

// splice(     start?: number,     end?: number, ): T[]
// (1) 删除指定元素 splice( start?:number, length?:number ) :T[]，返回被删除的元素组成的新数组
console.log('array.splice(start,length)-----------------');
let arr8 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     不指定任何参数时，实际不执行任何操作，返回一个空数组
let arr9 = arr8.splice();
console.log(arr8);      // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr9);      // []
console.log('-----------------');
//     只指定start=0时，删除所有元素
arr9 = arr8.splice(0);
console.log(arr8);      // []
console.log(arr9);      // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('-----------------');
arr8 = arr9.splice(2, 5);
console.log(arr8);      // [2, 3, 4, 5, 6]
console.log(arr9);      // [0, 1, 7, 8, 9, 10]
console.log('-----------------');
// (2) 在指定位置插入指定元素，比push()，unshift()更灵活
//     splice( start?:number, length:0, ...values ) :T[]，返回被删除的元素组成的新数组（空数组）
console.log('array.splice(start,0,...values)-----------------');
arr8 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     插入元素
arr9 = arr8.splice(3, 0, 'green', 'red', 'gao fei', 'ok');
console.log(arr8);      // [0, 1, 2, 'green', 'red', 'gao fei', 'ok', 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr9);      // []
// (3) 删除与插入综合使用
//     splice( start?:number, length?:number, ...values ) :T[]，返回被删除的元素组成的新数组
console.log('array.splice(start,length,...values)-----------------');
arr8 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     删除&插入元素
arr9 = arr8.splice(3, 4, 'green', 'red', 'gao fei', 'ok');
console.log(arr8);      // [0, 1, 7, 8, 9, 10]
console.log(arr9);      // [3, 4, 5, 6]

// toSpliced()
//     与splice的区别：（1）不改变原数组的值  （2）返回的数组是改变后的原数组的副本
console.log('array.toSpliced(start,length,...values)-----------------');
arr8 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr9 = arr8.toSpliced(3, 4, 'green', 'red', 'gao fei', 'ok');
console.log(arr8);      // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr9);      // [0, 1, 2, 'green', 'red', 'gao fei', 'ok', 7, 8, 9, 10]

// reverse(): T[]
console.log('array.reverse()-----------------');
arr8 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr9 = arr8.reverse();
console.log(arr8);      // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
console.log(arr9);      // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
console.log('array.toReversed()-----------------');
arr8 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr9 = arr8.toReversed();
console.log(arr8);      // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr9);      // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

// sort(     compareFn?: (a: T, b: T) => number, ): this
// toSorted(     compareFn?: (a: T, b: T) => number, ): T[]
console.log('array.sort()-----------------');
arr8 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr9 = arr8.sort();
console.log(arr8);      // [0, 1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr9);      // [0, 1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('array.toSorted()-----------------');
arr8 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr9 = arr8.toSorted();
console.log(arr8);      // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr9);      // [0, 1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('array.sort(function)-----------------');
arr8 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr9 = arr8.sort((a, b) => b - a);
console.log(arr8);      // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
console.log(arr9);      // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
console.log('array.toSorted(function)-----------------');
arr8 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr9 = arr8.toSorted((a, b) => b - a);
console.log(arr8);      // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr9);      // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]


arr8.unshi