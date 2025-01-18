// 数据类型与typeof运算符
// 数据类型         typeof运算符的结果
// undefined      undefined
// number         number
// string         string
// boolean        boolean
// null           object
// symbol         symbol
// object         object / function  ☆ 函数作为一种特殊对象，其typeof的结果为“function”
function myfunc1(){}

console.log(typeof myfunc1);    // "function"

// 声明了但值为undefined的变量，与未被声明的变量的区别
let let1;
// let let2;
console.log(typeof let1);     // undefined
console.log(typeof let2);     // undefined
console.log(let1);     // undefined
// console.log(let2);     // ReferenceError: let2 is not defined

// instanceof操作符
// <variant instanceof <constructor>
let obj=new Object();
let str=new String();
console.log("--------");
console.log(obj instanceof Object); // true
console.log(str instanceof Object); // true
console.log(str instanceof String); // true

// 上下文与作用域链(scope chain)
// 执行到with语句时，scope chain的最前端会追加一个变量对象，即with语句关联的对象location
function buildUrl(){
    let qs="?name=gaofei";

    with(location){
        let url=href + qs;
    }

    return url;         // ReferenceError: url is not defined
}

buildUrl();