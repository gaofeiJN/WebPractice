// 属性名可以简写，无论属性还是方法
let name = "gao fei";
let obj1 = {
    name,
    showName() {
        console.log(this.name);
    }
}
name="gao feifei";
obj1.showName();

// 属性名表达式
let job='job';
let fun1=function(value){
    return "city" + value;
}
let obj2={
    [job]:'se',
    [fun1('hangzhou')]:'江苏',
}
console.log(obj2);

