let reg2 = /(\d{3}|\d{2})([a-z])/i;
console.log("---------RegExp的方法----------");

// reg.test(<string>)
console.log("---------test()----------");
let str1 = "123abcd 234BCD 345za 4567"; // => true
console.log(reg2.test(str1));

// reg.exec(<string>)
console.log("---------exec()----------");
let mat1 = reg2.exec(str1);
console.log(mat1);
console.log("&1 = " + RegExp.$1);
console.log("&2 = " + RegExp.$2);
console.log(mat1.index);
console.log(mat1.input);
console.log(mat1["index"]);
console.log(mat1["input"]);

// => [第一个匹配的值，捕获组1，捕获组2，index，input，groups(??)，length]   length： 1 + 捕获组的数目，index,input,groups不计入length
// (3) ['123a', '123', 'a', index: 0, input: '123a 234B 345z 4567', groups: undefined]
// 0: "123a"
// 1: "123"
// 2: "a"
// groups: undefined
// index: 0
// input: "123a 234B 345z 4567"
// length: 3

// global模式下，每次exec之后，index都指向当前匹配的开始位置；下次匹配则从当前匹配之后开始进行
// 最后一次匹配后再调用exec，则返回null
console.log("---------global模式下的exec()----------");
let reg3 = new RegExp(reg2, "gi");
console.log(reg3);

let mat2 = reg3.exec(str1);
console.log(mat2);
// (3) ['123a', '123', 'a', index: 0, input: '123abcd 234BCD 345za 4567', groups: undefined]

mat2 = reg3.exec(str1);
console.log(mat2);
// (3) ['234B', '234', 'B', index: 8, input: '123abcd 234BCD 345za 4567', groups: undefined]

mat2 = reg3.exec(str1);
console.log(mat2);
// (3) ['345z', '345', 'z', index: 15, input: '123abcd 234BCD 345za 4567', groups: undefined]

mat2 = reg3.exec(str1);
console.log(mat2);
// null

// String.match(<RegExp>)
//
console.log("-------------String.match(<RegExp>)--------------");
let mat3 = str1.match(reg2);
console.log(mat3);
// (3) ['123a', '123', 'a', index: 0, input: '123abcd 234BCD 345za 4567', groups: undefined]

mat3 = str1.match(reg2);
console.log(mat3);
// (3) ['123a', '123', 'a', index: 0, input: '123abcd 234BCD 345za 4567', groups: undefined]

// global模式下，返回所有匹配，数组中没有index,input,groups等属性
console.log("-------------global模式下的String.match(<RegExp>)--------------");
let mat4 = str1.match(reg3);
console.log(mat4);
// (3) ['123a', '234B', '345z']

mat4 = str1.match(reg3);
console.log(mat4);
// (3) ['123a', '234B', '345z']

let str2 = "123a 2345 abcd";
let mat5 = str2.match(reg3);
console.log(mat5);
// ['123a']

// String.replace(RegExp,replaceString)
