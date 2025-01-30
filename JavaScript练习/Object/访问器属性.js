class Parent{
    get time(){
        return new Date().toLocaleString();
    }
}

class Child extends Parent{

}

let p=new Parent();
let c=new Child();
console.log(p);
console.log(p.time);
console.log(c);
console.log(c.time);