// 1.范围表示法 连字符（-） [0-9] [a-z] [A-Z]
let str1 = "0a 1b 2c 3d 0-9a-z";
console.log(str1.match(/[0-9][a-z]/g));
//   => ['0a', '1b', '2c', '3d', '9a']

// 1.(1)连字符（-）
//      在中括号内，如果连字符左右两边有字符，则表示范围；如果只有一边有字符或两边都没有，则表示连字符本身
//      在中括号内，如果连字符左右两边有字符，且要匹配连字符本身，需要转义
//      在中括号外，连字符表示它本身
console.log(str1.match(/[0\-9]/g));
//    => ['0', '0', '-', '9', '-']
console.log(str1.match(/[0-]/g));
//    => ['0', '0', '-', '-']
console.log(str1.match(/0-/g));
//    => ['0-']

// 2.排除字符组 脱字符(^) [^0-9]
console.log(str1.match(/[^01][a-z]/g));
//   => ['2c', '3d', '9a', '-z']

// 2.(1)脱字符(^)
//      在中括号内，脱字符表示求反
//      在中括号外，脱字符表示一行的开始位置
console.log(str1.replace(/^/, "#"));
//    => "#0a 1b 2c 3d 0-9a-z"

// 3.量词
//   {m,n}
//   {m,}
//   {m}
//   {,n} : 实测返回null，非法的pattern ?
//   {0}  : 0次，即没有字符。例：/ab{0}c/ 等价于 /ac/  【注】不等价于/a[^b]?c/
let str2 = "ac adc abc abbc abbbc abbbbc abbbbbc";
console.log(str2.match(/ab{0}c/g));
//    => ['ac']
console.log(str2.match(/ab{,3}c/g));
//    => null

// 4.字符组的简写形式
// \d就是[0-9]。表示是一位数字。记忆方式：其英文是digit（数字）。
// \D就是[^0-9]。表示除数字外的任意字符。
// \w就是[0-9a-zA-Z_]。表示数字、大小写字母和下划线。记忆方式：w是word的简写，也称单词字符。
// \W是[^0-9a-zA-Z_]。非单词字符。
// \s是[ \t\v\n\r\f]。表示空白符，包括空格、水平制表符、垂直制表符、换行符、回车符、换页符。记忆方式：s是space character的首字母。 NTR Very Fun
// \S是[^ \t\v\n\r\f]。 非空白符。
// .就是[^\n\r\u2028\u2029]。通配符，表示几乎任意字符。换行符、回车符、行分隔符和段分隔符除外。

//5.量词的简写形式
// ? 等价于{0,1}，表示出现或者不出现。记忆方式：问号的意思表示，有吗？
// + 等价于{1,}，表示出现至少一次。记忆方式：加号是追加的意思，得先有一个，然后才考虑追加。
// * 等价于{0,}，表示出现任意次，有可能不出现。记忆方式：看看天上的星星，可能一颗没有，可能零散有几颗，可能数也数不过来。

// 6.贪婪匹配和惰性匹配
//   (1) 贪婪匹配（默认）
//       以深度优先的原则匹配量词
//       例：/b{1,3}/ ，贪婪匹配下的优先度：bbb>bb>b
//   (2) 惰性匹配（在量词后面加?）
//       例：/b{1,3}/ ，惰性匹配下的优先度：b>bb>bbb

//    {m,n}?  => {m} > ... > {n}
//    {m,}?   => {m} > ...
//    ??      => {0} > {1}
//    +?      => {1} > {2} > ...
//    *?      => {0} > {1} > {2} > ...
let str3 = "ac adc abc abbc abbbc";
console.log(str3.match(/ab??c/g));
//    => ['ac', 'abc']
console.log(str3.match(/ab*?c/g));
//    => ['ac', 'abc', 'abbc', 'abbbc']
let str4 = "a ad ab abb abbb";
console.log(str4.match(/ab*?/g));
//    => ['a', 'a', 'a', 'a', 'a']

// 7.多选分支   (p1|p2|p3)
// 一个模式可以实现横向和纵向模糊匹配。而多选分支可以支持多个子模式任选其一。
// 具体形式如下：(p1|p2|p3)，其中p1、p2和p3是子模式，用|（管道符）分隔，表示其中任何之一。
// 分支结构也是惰性的，即当前面的匹配上了，后面的就不再尝试了。
let str5 = "a1c a2c a3c a4c abc adc";
console.log(str5.match(/(a2c|a4c|abc)/));
//     => ['a2c', 'a2c', index: 4, input: 'a1c a2c a3c a4c abc adc', groups: undefined]
console.log(str5.match(/(a2c|a4c|abc)/g));
//     => ['a2c', 'a4c', 'abc']
