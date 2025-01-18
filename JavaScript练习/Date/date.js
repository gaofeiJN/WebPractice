// 创建Date对象,默认为当前时间
let date1 = new Date();
console.log(date1.toString());
console.log(date1.toLocaleString()); // 当地时间表示 2025/01/12 09:00:01
console.log(date1.toUTCString());

// 创建Date对象,参数可以为毫秒数
let date2 = new Date(date1.getTime() + 24 * 60 * 60 * 1000);
console.log(date2.toLocaleString());

// 创建Date对象,参数可以指定年月日，其中月为0 - 11
let date3 = new Date(2025, 0, 14);
console.log(date3.toLocaleString());

// 解析函数，将字符串解析为事件的毫秒数
// parse()  参数
let time1 = Date.parse("1/12/2025"); // 月日年
console.log(time1);
console.log(new Date(time1));

// UTC()  参数
let time2 = Date.UTC(2025, 0, 12, 21, 50, 10, 111); // 年，月，日，时，分，秒，毫秒 ☆传入的是GMT时间，返回结果表示为中国时区时会加8小时！☆
console.log(time2);
console.log(new Date(time2));

// 方法
// getTime()
// setTime()
let date4 = new Date();
console.log(date4.toLocaleString());
console.log(date4.getTime());
date4.setTime(date4.getTime() + 24 * 60 * 60 * 1000);
console.log(date4);
console.log(date4.toLocaleString());

// get/getUTC : Year,Month,Date（日）,Day（周几）,Hours,Minutes,Seconds,MilliSeconds
// set/setUTC : Year,Month,Date（日）,Day（周几）,Hours,Minutes,Seconds,MilliSeconds

// getTimezoneOffset
let var1 = date4.getTimezoneOffset();
console.log(var1);
