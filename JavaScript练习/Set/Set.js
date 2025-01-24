// 构造函数，原型，实例
// 构造函数的参数  no parms | values?:T[] | iterable?:<T>
let set1=new Set();
let set2=new Set('gaofei');
let set3=new Set([1,2,3,4,5]);
console.log(set1);
console.log(set2);
console.log(set3);
console.log(Set.prototype);

// Set特有方法
// difference()
// isSubsetOf()
// isSupersetOf()
// union()
console.log('---isSupersetOf(),isSubsetOf()------------');
let set4=new Set([0,1,2,3,4,5,6,7,8,9]);
console.log(set4.isSupersetOf(set3));   // true
console.log(set3.isSubsetOf(set4));   // true
console.log('---union()------------');
let set5=set4.union(set2);     //
console.log(set4);
console.log(set5);
console.log('---difference()------------');
console.log(set4.difference(set3));     // Set(5) {0, 6, 7, 8, 9}
console.log(set3.difference(set4));     // Set(0) {size: 0}
console.log(set3.difference(set2));     // Set(5) {1, 2, 3, 4, 5}

// WeakSet
console.log('---WeakSet-------------------');
let ws1=new WeakSet();
console.log(WeakSet);
console.log(WeakSet.prototype);
console.log(ws1);
