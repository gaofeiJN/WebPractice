// 执行前
console.log(fun1);      // ƒ fun1() {...}
console.log(fun2);      // undefined

// 同名的外部函数
function fun1() {
    var outer = 0;
    console.log("outer function fun1");
}

// 执行
fun1();     // outer function fun1

// 块级代码
{
    // 同名函数
    function fun1() {
        var inner = 1;
        console.log("inner function fun1");
    }

    function fun2() {
        console.log("inner function fun2");
    }

    // 执行
    fun1();
    fun2();
}

// 执行后，块级代码外部的同名函数被覆盖
console.log(fun1);      // ƒ fun1() { var inner = 1; console.log("inner function fun1"); }
console.log(fun2);      // ƒ fun1() { console.log("inner function fun2"); }

// 再次执行
fun1();     // inner function fun1
fun2();     // inner function fun2

