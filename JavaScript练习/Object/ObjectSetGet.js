// 对象合并 Object.assign(<dest>,<src1>,...)
// 从源对象的访问器属性取得的值会作为静态值赋给目标对象，entry：[<key>:<get key()>]
// 源对象的属性会覆盖目标对象的同名属性；多个源对象有同名属性时，最后一个对象的属性覆盖之前对象的赋值
let obj1 = {
    name: "John",
    age: 33,
}

let obj2 = {
    job: 'SE',
    city: 'jinan',
    get star() {
        return this.job;
    },
    set star(value) {
        this.job = value;
    }
}

let obj4={
    brithYear: 1987,
    age:40,
    city: 'beijing',
}

let obj3=Object.assign(obj1,obj2,obj4);
console.log(obj1);
console.log(obj3);

let obj5=Object.create(obj4);
