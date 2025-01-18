// 正则表达式字面量
let reg1 = /[0-9a-z]/i;
console.log(reg1); // => /[0-9a-z]/i
console.log(reg1.toString()); // => /[0-9a-z]/i
console.log(reg1.toLocaleString()); // => /[0-9a-z]/i

// RegExp的属性

// pattern & flags
console.log(reg1.source);
console.log(reg1.flags);

// lastIndex
// 初始值0，
// flag:g不指定时，每次匹配后都为第一个匹配的开始位置
// flag:g指定了时，每次匹配后都为当前匹配的开始位置
console.log(reg1.lastIndex);

// 【.】是否代表所有字符
// 默认：表示几乎任意字符，换行符、回车符、行分隔符和段分隔符除外
// 指定了flag=s后，表示所有字符
console.log(reg1.dotAll);

// global
console.log(reg1.global);

// flag:i
// ignoreCase
console.log(reg1.ignoreCase);

// flag:m
// multiLine
console.log(reg1.multiline);

// flag:y
// 指定y时，只在lastIndex的位置进行匹配，游标不偏移
console.log(reg1.sticky);

// flag:u
// unicode
console.log(reg1.unicode);
