// 导入模块中的多个命名导出时，不能用下面的语法
// Uncaught SyntaxError: The requested module './namedexport.js' does not provide an export named 'default'
// import gf from "./namedexport.js"

// 导入模块中的多个命名导出的语法
// 语法一
import {name, age, chengshi} from "./namedexport.js"

console.log('---命名导出 方法一 ----------')
console.log(name);              // gao fei
console.log(age);               // 37
// console.log(city);           // uncaught ReferenceError: city is not defined
console.log(chengshi);          // jinan

// 语法二
// ！！！ 别名中的属性为访问器属性 ！！！
import * as gf from "./namedexport.js"

console.log('---命名导出 方法二 ----------')
console.log(gf);                    // Module{Symbol(Symbol.toStringTag): 'Module'}
console.log(gf.name);               // gao fei
console.log(gf.age);                // 37
console.log(gf.chengshi);           // jinan

// 导入模块的默认导出
import wjf from "./defaultexport.js"

console.log('---默认导出 ----------')
console.log(wjf);           // {name: 'wang jinfei', age: 36, city: 'taian'}
console.log(wjf.name);      // wang jinfei
console.log(wjf.age);       // 36
console.log(wjf.city);      // taian

// 导入模块的混合导出
// ！！！ 命名导出的别名中的属性为访问器属性 ！！！
import gyc, * as taotao from "./bothexport.js"

console.log('---混合导出 方法一 ----------')
console.log(gyc);                // {name: 'gao yucheng', age: 0.5, city: 'jinan'}
console.log(gyc.tname);          // gao yucheng
console.log(gyc.tage);           // 0.5
console.log(gyc.tcity);          // jinan
console.log(taotao);             // Module{Symbol(Symbol.toStringTag): 'Module'}
console.log(taotao.tname);       // gao yucheng
console.log(taotao.tage);        // 0.5
console.log(taotao.tcity);       // jinan

// 导入模块的混合导出
// ！！！ 命名导出的别名中的属性为访问器属性 ！！！
import {default as baobao, tname,tage,tcity} from "./bothexport.js"

console.log('---混合导出 方法二 ----------')
console.log(baobao);               // {tname: 'gao yucheng', tage: 0.5, tcity: 'jinan'}
console.log(baobao.tname);          // gao yucheng
console.log(baobao.tage);           // 0.5
console.log(baobao.tcity);          // jinan
console.log(tname);                 // gao yucheng
console.log(tage);                  // 0.5
console.log(tcity);                 // jinan