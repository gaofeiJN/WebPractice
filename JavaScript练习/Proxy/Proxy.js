let target = {
    name: 'gao fei',
    age: 37
}
let handler1 = {
    get(target, property, recerver) {
        console.log(`request to get ${property}`);
        return Reflect.get(target, property, recerver);
    },
    set(target, property, value, recerver) {
        console.log(`request to set ${property} to ${value}`);
        Reflect.set(target, property, value, recerver);
    }
}
let pro1 = new Proxy(target, handler1);

// 操作发生在target上
target.name = 'taotao';
console.log(target.name);
console.log(pro1.name);

// 操作发生在proxy上
pro1.name = 'wang jinfei';
console.log(target.name);
console.log(pro1.name);

//
console.log('---Proxy--------------------------');
console.log(Proxy);
console.log(Proxy.prototype);       // undefined
console.log(pro1);
