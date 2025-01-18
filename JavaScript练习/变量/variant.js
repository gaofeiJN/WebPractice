var num = 30;
console.log("The value of num is:" + (num + 10));

// 全局作用域在window对象的内部，它是可以跨越多个script元素的，即多个script元素的全局作用域都在window对象的内部
//
// 1. 变量的声明
//   (1) 全局作用域中
//       var声明的变量会成为window对象的成员属性，（函数会成为window对象的成员方法）
//       let声明的变量则不会成为window对象的成员属性
var myname = "gao fei";
var myage = 37;
let myjob = "SE";

function showName(name) {
    console.log(name);
}

//   (2) 函数作用域中
//       js引擎会将var变量的声明提升，多个重复的声明会合并为一个。（只提升声明，不提升赋值）
//       js引擎不会将let变量的声明提升，同一个作用域内不允许多个重复的let声明
showName(myname);
var myname = 99;

//   (3) 如果一个函数内部使用的一个变量，在之前和函数内部都没有被var/let定义，那么
//       **在函数执行的时候**，它会被当成在全局作用域中的var变量
//       【理解】
//        如果一个变量没有在任何一个作用域中被声明过，那么它会被当做windwo对象的成员属性，不管它所在的函数嵌套了多少层
//       【知识】
//        如果函数中一个变量没有声明就被初始化了，那么在调用函数之后，它会被添加到全局上下文中（因而也就成了window对象的成员变量）
function showJob() {
    mycity = "jinan";
    this.street = "gong ye nan lu";   // 相当于用这种方式给调用函数的上层对象声明成员属性并赋值

    function showJobSub(){
        myblock="xin yuan guo ji";
    }
    showJobSub();
    console.log(window.myblock);   // **myblock是windwo的成员属性！！** ==> why??
}

showJob();
console.log(window.mycity);
console.log(window.street);

//       *** 一个更好的例子 ***
//       *** 相当于在变量前面加上了【window.】 ***
function ObjMaker2(name) {
    myname2 = name;
}

ObjMaker2("gao fei");
console.log(window.myname2);  // "gao fei"

var gf3 = new ObjMaker2("gao feifei");
console.log(gf3.myname2);  // undefined
console.log(window.myname2);  // "gao feifei"

var gf4 = {};
gf4.objMaker2 = ObjMaker2;
gf4.objMaker2("gao feifeifei");
console.log(gf4.myname2);  // undefined
console.log(window.myname2);  // "gao feifeifei"

// 2. 常量
//   (1) const和let相似，除了以下两条
//       const声明的同时必须给常量赋值
//       const声明的常量，不允许再次赋值
//        ☆ 只对const指向的变量的引用有效
const obj1={}
obj1.name="gao fei";    // ok
//   (2) const和let的相同点
//       同一作用域内不允许多次声明同一个常量
//       块级作用域

// 3. 好的代码风格
//   (1) 不使用var
//   (2) const优先使用，其次用let

// 4.var可以穿透块{}
console.log("------------");
var dogname="little dog";
if (true){
    var dogname="big dog";
    console.log(dogname);
}
console.log(dogname);
