//
var name = "global name";
var obj1 = {
    name: "obj name",
    showName: function () {
        console.log(this.name);
    },
    showNameArrow: () => console.log(this.name)
}
var obj2 = {
    name: "obj2 name",
}

var obj3 = {
    name: "obj3 name",
    showName: function () {
        console.log(this.name);
    },
    obj4: {
        name: "obj4 name",
        showName: function () {
            console.log(this.name);
        },
        showNameArrow: () => console.log(this.name)
    },
}

// 改变this值的方法
// 对象句点语法调用
obj1.showName();    // obj name
obj2.showName = obj1.showName;
obj2.showName();    // obj2 name

// 箭头函数
// 箭头函数中，this引用的是【定义】箭头函数的【上下文】
console.log("---arrow function---");
console.log("---arrow : global上下文---");
obj1.showNameArrow();   // global name
obj2.showNameArrow = obj1.showNameArrow;
obj2.showNameArrow();   // global name
console.log("---arrow : 仍然是global上下文---");
obj3.obj4.showNameArrow();   // global name
obj2.showNameArrow = obj3.obj4.showNameArrow;
obj2.showNameArrow();   // global name

// bind(),apply(),call()
console.log("---bind(),apply(),call()---");
console.log("---普通函数---");
let fun2 = obj1.showName.bind(obj2);
fun2();     // global name
obj1.showName.apply(obj3);   // obj3 name
obj1.showName.call(obj3.obj4);   // obj4 name

console.log("---arrow : global上下文---");
obj2.showNameArrow = obj1.showNameArrow;
obj2.showNameArrow.bind(obj2);   // global name
obj2.showNameArrow.apply(obj2);   // global name
obj2.showNameArrow.call(obj2);   // global name;
console.log("---arrow : 仍然是global上下文---");
obj2.showNameArrow = obj3.obj4.showNameArrow;
obj2.showNameArrow.bind(obj2);   // global name
obj2.showNameArrow.apply(obj2);   // global name
obj2.showNameArrow.call(obj2);   // global name

// 箭头函数
console.log("---arrow : 上下文只有全局和函数和eval三种---");
var obj5 = {
    name: "obj5 name",
    showName: function () {
        setTimeout(() => console.log(this.name), 1000);
    },
    showNameArrow: function () {
        let temp = () => console.log(this.name);
        temp();
    }
}
obj5.showName();   // obj5 name
obj5.showNameArrow();   // obj5 name