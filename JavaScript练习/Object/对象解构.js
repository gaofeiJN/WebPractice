let obj = {
    name: "gao fei",
    age: 37,
    job: {
        jobname: "SE",
        jobcity: "jinan"
    }
}

// 对象解构赋值，定义变量并将对象的属性赋值给它
// 变量与属性同名时的简写形式
let {name, age} = obj;
console.log(name, " ", age);    // gao fei   37

// 变量与属性不同名时
let {name: myname, age: myage} = obj;
console.log(myname, " ", myage);    // gao fei   37

// 若属性在对象中不存在，则变量值为undefined;可以为变量赋默认值
let {name: hename, city: hecity, job: hejob = "gogo"} = obj;
console.log(hename, " ", hecity, " ", hejob);   // gao fei   undefined   {jobname: 'SE', jobcity: 'jinan'}

// 若要为已经定义的变量赋值，则赋值表达式必须用括号括起来
let shename;
let sheage;
({name: shename, age: sheage} = obj);
console.log(shename, " ", sheage);  // gao fei   37

// 源对象和赋值目标都可以使用嵌套结构
let gf = {};
// 赋值目标使用嵌套结构
({name: gf.name, age: gf.age} = obj);
// 源对象使用嵌套结构
let {job: {jobname}} = obj;
// 都使用嵌套结构
gf.job = {};
({job: {jobname: gf.job.jobname}, job: {jobcity: gf.job.jobcity}} = obj);
console.log(gf);    // {name: 'gao fei', age: 37, job: {…}}

// 可以在函数的形参中使用解构赋值
// 形参中的解构赋值不影响arguments，arguments中的参数仍是传入的对象.
function getinfo({name, age}) {
    console.log(name, " ", age);    // gao fei   37
    console.log(arguments[0]);  // {name: 'gao fei', age: 37, job: {…}}
}

getinfo(obj);