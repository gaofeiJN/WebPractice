//
const fun1 = function () {
  let name = "gao fei";
  let obj = {
    name: "di fei",
    age: 37,
    getName: function () {
      return this.name;
    },
    obj2: {
      str: "hello world",
      sayHello: function () {
        console.log("hello world");
      },
    },
    hello: function () {
      this.obj2.sayHello();
    },
  };
  console.log(name);
  this.obj = obj;
  console.log(obj.getName());
  obj.hello();
};
console.log(fun1);
fun1();
