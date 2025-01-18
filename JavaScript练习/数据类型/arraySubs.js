// Array(n)  创建n个元素的空数组
var arr0 = Array(3)
console.log(arr0);

// Array.from()  ※根据伪数组创建数组
// 1. arguments
function myfun() {
    console.log(arguments);
    var myargs = Array.from(arguments);
    console.log(myargs);
}

myfun(10, 20, 30, 40)

// 2. 元素集合
var elements =document.querySelectorAll("h3");
console.log(elements);
var myele = Array.from(elements);
console.log(myele);

// 3. 伪数组对象
var myobj = {
    "0":"gao",
    "1":"feo",
    "2":"SE",
    length:3
}
var myobjarr=Array.from(myobj);
console.log(myobj);
console.log(myobjarr);

// Array.of()   将一组值转为数组
var myarr=Array.of(10,20,30,40);
console.log(myarr);


// Array.isArray() as Boolean   ※类方法
var arr1 = [];
console.log("arr1 is an array : " + Array.isArray(arr1));

// arr.push(newMember) as Number  ※向尾部添加元素，返回数组的新length；可添加多个元素
arr1.push("gao");
arr1.push("fei");
arr1.push(37);
console.log(arr1.push("SE", "father", "son"));
console.log(arr1);

// arr.pop()  ※从尾部删除一个元素，返回该元素；从空数组中删除，返回undefined
console.log(typeof (arr1.pop()));
console.log(typeof (arr1.pop()));
console.log(typeof (arr1.pop()));
console.log(typeof (arr1.pop()));
console.log(typeof (arr1.pop()));
console.log(arr1);

// arr.shift()  ※从头部删除一个元素，返回该元素；从空数组中删除，返回undefined
// 用while循环遍历并清空一个数组
arr1.push("gao");
arr1.push("fei");
arr1.push("37");
console.log(arr1.push("SE"));
console.log(arr1);
while (mem = arr1.shift()) {
    console.log(mem);
}
console.log(arr1);

// unshift()  ※向头部添加元素，返回数组的新length；可添加多个元素
console.log(arr1.unshift("gao", "fei", "37", "SE", "father", "son", "student"));
console.log(arr1);

// join()  ※以制定参数作为分隔符，将数组成员连成一个字符串
//           默认分隔符为逗号
var arr2 = ["gao", "fei", "37", "SE"];
console.log(arr2.toString());
console.log(arr2.join());
console.log(arr2.join(" "));
console.log(arr2.join("|"));
console.log(arr2.join(""));

// concat() as Array  ※将多个数组合并为一个数组，返回合并后的数组；不会改变原数组
// 应用场景：上拉加载，合并数据
// arr1.concat(arr2,arr3,...)
var arr3 = ["haha", "hello", "world"];
var arr4 = ["on top of the world", "outlaws of love", "sound of silence"];
var arr5 = arr2.concat(arr3, arr4);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);

// 参数可以不是array类型
var arr6 = arr2.concat(10, 20, 30, 40);
console.log(arr6);

// reverse()  ※将数组元素按倒序重新排序，返回改变后的数组；会改变原数组
var arr7 = arr2.reverse();
console.log(arr2);
console.log(arr7);

// indexOf()   ※返回元素在数组中的第一个位置；没有时返回-1
console.log(arr2.indexOf("37"));
console.log(arr2.indexOf("38"));

// arr.indexOf(mem,startpos)   ※指定第二个参数时，表示从哪个位置开始搜索
var arr8 = ["haha", "gao", "haha", "fei", "haha",]
console.log(arr8.indexOf("haha", 3));
