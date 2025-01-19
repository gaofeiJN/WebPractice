let constructor=function (){}
let obj1=new constructor();

console.log(constructor.prototype);
console.log(constructor.prototype.constructor===constructor);
console.log(obj1.constructor===constructor);
console.log(obj1.constructor);
console.log('---------');
console.log(obj1 instanceof Object);
console.log(obj1 instanceof constructor);
console.log(obj1 instanceof constructor.prototype); // Uncaught TypeError: Right-hand side of 'instanceof' is not callable




