// 静态方法
console.log(Array.from);
console.log(Array.of);
console.log(Array.fromAsync);

// 数组的length属性
// 使用length属性可以方便的把元素追加到数组的末尾，相当于push()
let arr1=[1,3,5];
arr1[arr1.length]=7;
arr1[arr1.length]=9;
arr1[arr1.length]=11;
console.log(arr1);