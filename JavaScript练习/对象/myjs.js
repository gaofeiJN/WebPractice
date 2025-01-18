var name = "gao fei";
var obj = {
    // 第一个name为obj的键，第二个name为obj的键name的值，值为变量【name】
    // 此种情况下，【:name】可以省略
    name: name,
    age: 37,
    job: "SE",
    getName: function () {
        return this.name;
    },
    getAge: function () {
        return this.age;
    },
    getJob: function () {
        return this.job;
    }
}

console.log(obj.getName());
console.log(obj.getJob());
console.log(obj.getAge());

var obj2 = {
    // 第一个name为obj的键，第二个name为obj的键name的值，值为变量【name】
    // 此种情况下，【:name】可以省略
    name,
    age: 37,
    job: "SE",
    getName: function () {
        return this.name;
    }
}

console.log(obj.getName());

// 属性名可以用方括号内的表达式来表示
var id = "name";
var obj3 = {
    [id]: "wang jin fei",
    age: 36
}
console.log(obj3);


// 扩展运算符 ...object
var t = { obj }
console.log(t);
var s = { ...obj }
console.log(s);


// 枚举对象属性（包括方法）  for in语句
// 
var obj3 = {
    name: "gao fei",
    age: 37,
    job: "se",
    getName: function () {
        return this.name;
    },
    getAge: function () {
        return this.age;
    }
}

for (prop in obj3) {
    console.log("obj3 property :" + obj3[prop]);

}

// 增删属性，方法
obj3.favor = "manga";
obj3.getJob = function () {
    return this.job;
};

delete obj3.age;
delete obj3["getAge"];

for (prop in obj3) {
    console.log("obj3 property :" + obj3[prop]);

}

// 判断对象是否具有某个属性
// in表达式
console.log("name in obj3 is " + ("name" in obj3));
console.log("age in obj3 is " + ("age" in obj3));
console.log("job in obj3 is " +  ("job" in obj3));
