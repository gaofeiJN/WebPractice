var mystr="This is my String!";

// charAt(pos) as Char
var mychar=[];
for (let i=0;i<mystr.length;i++){
    mychar[i]=mystr.charAt(i);
}

console.log(mystr);
console.log(mychar);

// at(pos)
// 支持负索引,即倒数的位置，从-1开始
console.log(mystr.at(-1));
console.log(mystr.at(-2));
console.log(mystr.at(1));
console.log(mystr.at(2));


// substring(start,stop) as String  ※[start,stop)
var substr="";
for(let i=1;i<=mystr.length;i++){
    substr=mystr.substring(0,i);
    console.log(substr);
}

// substr(start,length) as String
// VBA中的相关函数
// Left(mystr,length)
// Right(mystr,length)
// Mid(mystr,start,length)
for(let i=1;i<=mystr.length;i++){
    substr=mystr.substr(0,i);
    console.log("substr = " + substr);
}

mystr.sli

// String1.concat(String2[,String3,...]) as String  ※不改变原字符串
var mystr2="哈哈哈哈 ";
var mystr3="高菲 ";
var mystr4="高钰城 ";
var mystr5="王金飞 ";
var result=mystr.concat(mystr2,mystr3,mystr4,mystr5);
console.log("mystr2 = " + mystr2);
console.log("mystr3 = " + mystr3);
console.log("mystr4 = " + mystr4);
console.log("mystr5 = " + mystr5);
console.log("result = " + result);

// String.indexOf(SubString) as Number
// 返回substring在string中的位置，index从0开始；string中没有substring时返回-1
// VBA中的相关函数
// Instr(String,SubString) as Long
var pos = mystr.indexOf("my");
console.log(pos);

// string.includes(substr) as Boolean
// string.startsWith(substr) as Boolean
// string.endsWith(substr) as Boolean
// 3个方法都可以接受第二个参数，表示开始搜索的位置
console.log("mystr includes 'This' : "+mystr.includes("This"));
console.log("mystr starts with 'This' : "+mystr.startsWith("This"));
console.log("mystr ends with 'String' : "+mystr.endsWith("String"));


// String.trim()
// String.trimStart()
// String.trimEnd()
// String.trimLeft()
// String.trimRight()
// ※VBA : Trim(String),LTrim(String),RTrim(String)
var wkstr="  This is my String !  ";
var wkstr1=wkstr.trim;
var wkstr2=wkstr.trimStart();
var wkstr3=wkstr.trimEnd();
var wkstr4=wkstr.trimLeft();
var wkstr5=wkstr.trimRight();
console.log(wkstr);
console.log(wkstr2);
console.log(wkstr3);
console.log(wkstr4);
console.log(wkstr5);

// Stirng.split()
// Stirng.split(para1,para2)   para2：返回的字符串的个数
// 
wkstr="  This    is   my     String      !  "
var wkstrs=[];

// Stirng.split()  不指定参数时候，不进行切割
wkstrs=wkstr.split();
console.log("wkstrs1 : \n" + wkstrs);

// Stirng.split("")  用空字符串切割的时候，字符串被切割成单个字符
wkstrs=wkstr.split("");
console.log("wkstrs2 : \n" + wkstrs);

// Stirng.split(" ")  用单个空格切割
wkstrs=wkstr.split(" ");
console.log("wkstrs3 : \n" + wkstrs);

// Stirng.trim().split(" ")  先trim(),再split()
wkstrs=wkstr.trim().split(" ");
console.log("wkstrs4 (split with trim) : \n" + wkstrs);

// 用正则表达式，切割多个空格
// 【格式】/正则表达式/ 
// 【表达式】 \s : 匹配任何Unicode空白字符，包括空格、制表符、换页符等，等效于[\f\t\n\r] 
// 【表达式】 +  : ≥1 次
wkstrs=wkstr.trim().split(/\s+/);
console.log("wkstrs5 (split with trim) : \n" + wkstrs);

// string.repeat(n) as String  ※将原字符串重复n次后返回
var wkstr6="ha ";
var wkstr7=wkstr6.repeat(3);
console.log(wkstr7);

// string.padStart(para1,para2)
// string.padEnd(para1,para2)
// para1指定长度，若string的长度不足，则用para2进行补全。padStart从头部补全，padEnd从尾部补全
//               若string的长度>=para1，则返回原字符串
var wkstr8="hello world";
var wkstr9=wkstr8.padStart(15,"ha ");
var wkstr10=wkstr8.padEnd(15,"ha ");
console.log(wkstr8);
console.log(wkstr9);
console.log(wkstr10);

