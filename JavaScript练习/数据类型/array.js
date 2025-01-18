var myarr1 = ["gao", "fei", 37, "SE"];
var myarr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(myarr1);
console.log(myarr2.toString());

// 数组遍历
// 方法一 下标循环
console.log("for下标循环:");
for (let i = 0; i < myarr1.length; i++) {
    console.log(myarr1[i]);
}
console.log("\n");

// 数组遍历
// 方法二 下标循环
console.log("while循环:");
var i2 = 0;
while (i2 < myarr1.length) {
    console.log(myarr1[i2++]);
}
console.log("\n");

// 方法三 for in
// ※与VBA的for each 循环的区别：js的for in循环的对象是数组的“下标”！！！
console.log("for in 循环：");
for (var i3 in myarr1) {
    console.log(myarr1[i3]);
}
console.log("\n");

// 扩展运算符 ...arr
// 将数组展开
var myarr3 = [10, 20, 30, 40];
var myarr4 = [50, 60, 70, 80];
console.log(...myarr3);
console.log(Math.max(...myarr4));
console.log([...myarr3, ...myarr4]);


// slice(start,end)
var myarr5 = [10, 20, 30, 40, 50];
var myarr51 = myarr5.slice(0, 2);
console.log(myarr51);

// try catch
try {
    console.log("myarr5 : \n");
    
    for (i=0;i<=myarr5.length;i++){
        console.log(myarr5[i]);
        
    }
} catch(e){
    console.log(e);
    
}