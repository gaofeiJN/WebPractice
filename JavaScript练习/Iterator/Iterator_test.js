//
let arr1=[2,3,4,5,6];
let iter1 = arr1[Symbol.iterator]();
// Array的迭代器对象实现了Iterable接口，调用迭代器的迭代器工厂方法，返回的是它自身
let iter2 = iter1[Symbol.iterator]();
console.log(iter1);
console.log(iter2);
console.log(iter1===iter2);