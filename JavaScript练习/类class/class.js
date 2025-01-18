// 原型函数
// 定义在类块中的函数为类的prototype原型的函数
class MyClass {
  constructor() {}

  sayHello() {
    console.log("Hello!");
  }
}

let myo1 = new MyClass();
myo1.sayHello();
MyClass.prototype.sayHello();
MyClass.sayHello();
console.log(myo1);
console.log(MyClass.prototype);
console.log(MyClass);
