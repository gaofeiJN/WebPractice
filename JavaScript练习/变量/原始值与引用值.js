// 原始值类型有其对应的引用类型构造函数
// 例：String()
//     作为普通函数用时，可以把其他类型的数据转为string类型
//     作为构造函数用时，可以生成一个对象：String{'<string value>'}
//
let str1 = 'gao fei';
let str2 = new String("gao fei2");

str1.age = 37;
str2.age = 37;

console.log(str1.age);  // undefined
console.log(str1);      // gao fei
console.log(str2.age);  // 37
console.log(str2);      // String{'gao fei2', age: 37}

//
let num1=10;
let num2=new Number(10);
console.log(num1);
console.log(num2);

//
let boo1=false;
let boo2=new Boolean(false);
console.log(boo1);
console.log(boo2);

// *** 函数的参数是按照值来传递的 ***
let num3=20;
function myfunc1(mynum){
    mynum+=10;
    return mynum;
}
let num4=myfunc1(num3);
console.log(num3);  // 20 ** 值没有变化 **
console.log(num4);  // 30