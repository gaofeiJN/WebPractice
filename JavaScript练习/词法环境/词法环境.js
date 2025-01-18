// 函数的AO/VO和函数对象本身应该不是同样的对象
// 函数对象：执行完函数的声明语句，或者预加载（全局环境）时生成，并等级到其外围词法环境的EnvRec中
// VO/AO：函数执行时，用作函数的作用域
// 代码执行前
console.log("---代码执行前--------");
console.log(fun1.hasOwnProperty("job"))
console.log(fun1.hasOwnProperty("getName"))

// 对于变量对象来说，块级代码{}中的function定义，和var具有相同的行为
// 执行前：初始化为undefined
// 执行完声明代码以后：由函数对象覆盖undefined
function fun1() {
    let name = "gao fei";
    var job = "SE";
    var getName = "getName";

    // 块级{}中定义function
    {
        let city = "JiNan";
        var age = 37;

        // 同名函数
        function getName() {
            return getName + job + city + age;
        }

        getName();

        // 不同名函数
        function setName(names) {
            name = names;
        }

        setName("JavaScript");
    }

    let num1 = 30;
    console.log(num1);

    console.log("---fun1执行完毕--------");
    console.log(arguments.callee.hasOwnProperty("job"))
    console.log(arguments.callee.hasOwnProperty("getName"))
    console.log(arguments.callee.hasOwnProperty("setName"))
}

fun1();

// fun1退出后
console.log("---fun1退出后--------");
console.log(fun1.hasOwnProperty("job"))
console.log(fun1.hasOwnProperty("getName"))
console.log(fun1.hasOwnProperty("setName"))