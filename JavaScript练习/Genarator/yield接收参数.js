// 用yield接收next()方法中的参数
class Class1{
    constructor(){
        this.arr=[3,5,7,9];
    }

    *[Symbol.iterator](){
        console.log("genarator start");
        console.log(yield 1);
        console.log(yield 2);
        console.log(yield 3);
        console.log(yield 4);
        console.log("genarator end");
    }
}

let obj1 = new Class1();
let gen1=obj1[Symbol.iterator]();

console.log(gen1.next("loop1"));
console.log(gen1.next("loop2"));
console.log(gen1.next("loop3"));
console.log(gen1.next("loop4"));
console.log(gen1.next("loop5"));