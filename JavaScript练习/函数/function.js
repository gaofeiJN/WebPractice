// (1) 函数是对象，可以像对象一样来引用，也可以用数组的方式引用函数，但是不可以用for循环来遍历函数（not iterable）
function showJob(name, age) {
    myname = name;
    myage = age;
}

console.log("函数是对象，可以像对象一样来引用，也可以用数组的方式引用函数，但是不可以用for循环来遍历函数（not iterable）-----------");
// ** 不可以用for循环遍历函数！ **
// ** showJob is not iterable **
// for (let elem of showJob) {
//     console.log(elem);
// }
console.log(showJob.name);
console.log(showJob.length);
console.log("showJob[name] : " + showJob["name"]);
console.log("showJob[length] : " + showJob["length"]);

// (2) 普通函数与构造函数
console.log("一个函数即作为普通函数用，又作为构造函数用（构造函数）--------");

function objMaker() {
    this.myname = "gao fei";
}

objMaker();
console.log(window.myname);  // "gao fei"

var gf = new objMaker();
console.log(gf.myname);  // "gao fei"

var gf2 = {};
gf2.objMaker = objMaker;
gf2.objMaker();
console.log(gf2.myname);  // "gao fei"

// (3) 普通函数与构造函数
//     任何一个函数都可以当做构造函数来使用：var obj = new anyFunction()，返回一个object
//     object的成员属性： this.<name> = <value>
//     object的成员方法： this.<name> = function() {}
//     如果函数中没有上记语句，则返回一个空对象{}
console.log("一个函数即作为普通函数用，又作为构造函数用（普通函数）---------");

function objMaker2(name) {
    myname2 = name;
}

objMaker2("gao fei");
console.log(window.myname2);  // "gao fei"

let gf3 = new objMaker2("gao feifei");
console.log(gf3);  // gf3为一个空对象{} ！
console.log(gf3.myname2);  // undefined
console.log(window.myname2);  // "gao feifei"

let gf4 = {};
gf4.objMaker2 = objMaker2;
gf4.objMaker2("gao feifeifei");
console.log(gf4.myname2);  // undefined
console.log(window.myname2);  // "gao feifeifei"
