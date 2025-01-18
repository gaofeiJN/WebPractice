var myname="gao fei";
var myage=37;
var imold=true;
var me ={
    name:"gao fei",
    age:"37",
    old:true
}

var oempty=null;
var odefined;

console.log(myname);
console.log(myage);
console.log(imold);
console.log(me);

console.log(typeof(myname));
console.log(typeof(myage));
console.log(typeof(imold));
console.log(typeof(me));

// typeof(null)返回值为"object"
console.log(typeof(oempty));
console.log(typeof(odefined));

var fun=function(){
    console.log("gao fei");
    
}
// typeof(function) = function
console.log(typeof(fun));
