// 迭代器工厂函数 + 迭代器对象
// 用生成器语法，一条语句就能搞定
class Class1{
    constructor(){
        this.array = [3,5,7,9];
    }

    *[Symbol.iterator]() {
        yield * this.array;
    }
}

let arr1=new Class1();
for (let i of arr1){
    console.log(i);
}