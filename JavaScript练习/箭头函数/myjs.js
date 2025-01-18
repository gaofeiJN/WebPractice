// 没有参数的函数
var fn1 = () => 10;
console.log(fn1());


// 只有一个参数的函数
var fn2 = x => x * 10;
console.log(fn2(3));

// 多个参数的函数
var fn3 = (x, y) => x * y;
console.log(fn3(3, 5));

// 返回对象时，用括号()把对象括起来
var fn4 = () => ({ name: "gao fei", age: 37, job: "SE" });
console.log(fn4());

// 函数体的语句有多条时
var fn5 = (x, y) => {
    console.log(x);
    console.log(y);
}
fn5("gao fei","哈哈")

// 注意点：
// 普通函数的this指向调用该函数的对象，
// 但是箭头函数没有this，其内部的this就是上层作用域中的this
var name = "gao fei";
var gaof = {
    name: "wang jin fei",
    age: 36,
    job: "doctor",

    // setTimeout的上层调用者是window对象，它的name属性值为"gao fei"
    getName1() {
        setTimeout(function () {
            console.log(this.name);

        })
    },

    // 箭头函数没有this对象，其中的this为上层作用域的gaof
    getName2() {
        setTimeout(() => {
            console.log(this.name);

        })
    }
}
gaof.getName1();
gaof.getName2();