// 使用反斜杠 \ 进行转义
var mystr="This is a \"String\""
console.log(mystr);

// 单双引号嵌套
var mystr1="This is a 'String'!"
var mystr2='This is a "String"!'
console.log(mystr1);
console.log(mystr2);

// 换行符
// \n  \r

// 字符串的遍历
// for of  ※对象是string里面的字符
// for in  ※对象是string里面的字符的下标
for (let i of mystr){
    console.log(i);    
}

for (let i in mystr){
    console.log(mystr.charAt(i));
    
}

// 模版字符串
// 1.用反引号包裹【``】.
// 2.除了普通字符串外，里面可以加入变量，关键字${}

var myhref="https://www.csdn.net/?spm=1001.2101.3001.4476";
var mytext="模版字符串";
var mya1=`<a href="${myhref}">${mytext}</a>`

document.write(mya1);
console.log(mya1);
