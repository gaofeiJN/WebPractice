console.log('---我是import----------');

// 要导入的脚本不可以是module模式的
//  Uncaught SyntaxError: Failed to execute 'importScripts' on 'WorkerGlobalScope':
//  Unexpected token 'export' (at import.js:3:1)
// export var name = "gaofei";
// export var age = 37;
// export var city = "jinan";
// export default {name, age, city};

//
var name = "gao fei";
var age = 37;
var city = "jinan";