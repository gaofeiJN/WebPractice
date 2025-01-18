// Set() 构造函数，参数可以是数组，字符串
// 1. 数组
var arr11=[10,20,30,40,30,20,10];
var set1 = new Set(arr11);
console.log(arr11);
console.log(set1);

// 可用于数组去重复
// 扩展运算符 ...set
var arr12=[...new Set(arr11)];
console.log(arr12);


// 2.字符串
var str21="abcdedcba";
var set2=new Set(str21);
console.log(str21);
console.log(set2);

// 可用于字符串去重复
var str22=[...new Set(str21)].join("");
console.log(str22);


// set.add() 向set中添加成员
// set的属性：
// size
var arr31=[10,20,30,20,10];
var set3 = new Set();
arr31.forEach(x => set3.add(x));
console.log(arr31);
console.log(set3);
console.log(set3.size);

// set.delete() 删除成员。若成员存在并被删除，返回true；否则，返回false。
// set.has()    判断是否包含成员
console.log(set3.delete(30));
console.log(set3.has(20));
console.log(set3.has(40));

// set.clear() 删除所有成员，没有返回值
set3.clear();
console.log(set3);

var set4=new Set([10,20,30,40,30,20,10]);
console.log(set4);
var set5=set4.add(50);
console.log(set4);
console.log(set5);

var str31="gao";
str31.l