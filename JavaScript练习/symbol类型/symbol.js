// symbol类型
// 由Symbol()函数初始化，表示一个独一无二的，不可更改的值
let sym1=Symbol('a');
let sym2=Symbol('a');
console.log(sym1);   // Symbol(a)
console.log(sym2);   // Symbol(a)
console.log(sym1==sym2);   // false

// Symbol.for(<string>)
// 第一次以某个key调用Symbol.for()时，会将初始化的symbol值注册在全局运行时注册表中；
// 第二次以某个key调用Symbol.for()时，会取得全局注册表中的symbol值，不会创建新值。
let sym3=Symbol.for('a');   // sym3 != sym1或sym2，只有Symbol.for()才会把symbol值注册在全局注册表上，Symbol()则不会
let sym4=Symbol.for('a');
console.log(sym4);  // Symbol(a)
console.log(sym3===sym1);   // false
console.log(sym3===sym2);   // false
console.log(sym3===sym4);   // true

// Symbol.keyFor(<symbol>)
// 取得某个symbol值在全局注册表中的key
console.log(Symbol.keyFor(sym3));   // a
console.log(Symbol.keyFor(sym4));   // a

// symbol值用来做对象的属性的key
//
let obj1={
    name:"gao fei",
    age:42,
    [sym1]:"Jinan",
    [sym3]:"GaoXinQu"
}
console.log(Object.getOwnPropertyNames(obj1));  // 返回以普通字符串key：['name', 'age']
console.log(Object.getOwnPropertySymbols(obj1));    // 返回symbol key：[Symbol(a), Symbol(a)]
console.log(Object.getOwnPropertyDescriptors(obj1));    // 返回普通字符串或symbol key及值
// symbol.js:34 {name: {…}, age: {…}, Symbol(a): {…}, Symbol(a): {…}}
// age: {value: 42, writable: true, enumerable: true, configurable: true}
// ...
console.log(Reflect.ownKeys(obj1)); // 回普通字符串或symbol key：['name', 'age', Symbol(a), Symbol(a)]

// 以symbol为key的属性无法用普通的迭代方法取得
// for in,for of,Object.getOwnPropertyNames
for (let key in obj1){
    console.log(obj1[key]);
}

// 可以先用Reflect.ownKeys(<obj>)函数现将所有字符串key和symbol值key转为可以迭代的对象，
// 再用普通方法迭代
for (let key of Reflect.ownKeys(obj1)){
    console.log(obj1[key]);
}