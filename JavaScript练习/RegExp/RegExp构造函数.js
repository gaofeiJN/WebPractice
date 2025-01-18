// RegExp构造函数的属性  ※相当于其他语言中的静态(static)属性
// input : 最后搜索的字符串
// lastMatch : 最后匹配的文本
// leftContext : input字符串中出现在lastMatch之前的文本
// rightContext : input字符串中出现在lastMatch之前的文本
// lastParen : 最后一个捕获组
let reg1 = /a(bc(de)?)/g;
let str1 = "abcfg abcdefg";
console.log(str1.match(reg1)); // ['abc', 'abcde']
console.log(RegExp.input); // 'abcfg abcdefg'
console.log(RegExp.lastMatch); // 'abcde'
console.log(RegExp.leftContext); // 'abcfg '
console.log(RegExp.rightContext); // 'fg'
console.log(RegExp.lastParen); // 'de'
