//
let city = Symbol('city');
let obj1 = {
    name: "gao fei",
    age: 37,
    [city]: "jinan"
}

// 定义属性
// defineProperty(<obj>,<key>,<descriptor>)
Object.defineProperty(obj1, "name", {
    configurable: true,
    enumerable: true,
    writable: false,
    value: 'gao feifei'
});
obj1.name = "gao dafei";

Object.defineProperty(obj1, city, {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'bei jing'
})
obj1[city] = 'xi an';

console.log(obj1);  // {name: 'gao feifei', age: 37, Symbol(city): 'xi an'}

// 定义多个属性
let obj2 = {};
Object.defineProperties(obj2, {
    "name": {
        configurable: true,
        enumerable: true,
        writable: false,
        value: "wang jin fei"
    },
    "age": {
        configurable: true,
        enumerable: true,
        writable: false,
        value: 36
    },
    [city]: {
        configurable: true,
        enumerable: true,
        writable: false,
        value: "shang hai"
    }
})
console.log(obj2);

// 定义访问器属性
// 用Object.defineProperty()/defineProperties()来定义
// ☆ [[get]] [[set]]中的属性中不能有访问器属性，否则会无限循环！
let obj3 = {
    brithYear: 1987,
    _age: 37,
    _year: 2025
};
Object.defineProperty(obj3, 'age', {
    configurable: true,
    enumerable: true,
    get() {
        return this._age;
    },
    set(value) {
        this._age = value;
        this._year = this.brithYear + value;
    }
})
obj3.age = 40;
console.log(obj3.age);  // 40
console.log(obj3._age); // 40
console.log(obj3._year);    // 2027

// 定义访问器属性
// 直接定义[[set]],[[get]]
// ☆ [[get]] [[set]]中的属性中不能有访问器属性，否则会无限循环！
let obj4 = {
    brithYear: 1987,
    _age: 37,
    _year: 2025,
    get age() {
        return this._age;
    },
    set age(value) {
        this._age = value;
        this._year = this.brithYear + value;
    }
};

obj4.age = 41;
console.log(obj4.age);  // 41
console.log(obj4._age); // 41
console.log(obj4._year);    // 2028

//
console.log(Object.getOwnPropertyDescriptor(obj1, 'name'));
console.log(Object.getOwnPropertyDescriptors(obj1));
console.log(Object.getOwnPropertyNames(obj2));
console.log(Object.getOwnPropertySymbols(obj2));
console.log(Object.getPrototypeOf(obj3));

// Object.prototype上的方法
console.log('obj1.hasOwnProperty(\'age\') : ' + obj1.hasOwnProperty('age'));
console.log('obj1.hasOwnProperty([city]) : ' + obj1.hasOwnProperty(city));
console.log('obj2.propertyIsEnumerable(\'age\') : ' + obj2.propertyIsEnumerable('age'));
console.log('obj1.isPrototypeOf(obj2) : ' + obj1.isPrototypeOf(obj2));
console.log(obj2.__proto__);