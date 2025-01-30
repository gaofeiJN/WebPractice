//
console.log(window);
console.log(window.Location);
console.log(window.Location.prototype);
console.log(window.location);

// URL.parse()解析后返回的对象的属性与location的同名属性一致
// 自动对href进行encodeURIComponent()
console.log('---URL.parse()----------');
let href = 'http://localhost:63342/WebPractice/JavaScript练习/BOM/Location/Location.html?name="gao fei"&age=37&city="xi an"#body';
let parsedURL = URL.parse(href);
console.log(parsedURL);
console.log(parsedURL.searchParams);
console.log(parsedURL.search);
console.log(decodeURIComponent(parsedURL.search));

// URLSearchParams
// 自动对href进行encodeURIComponent()
console.log('---URLSearchParams----------');
let search = '?name=gao fei&age=37&city=ji nan';
let srchparam = new URLSearchParams(search);
console.log(srchparam);
for (entry of srchparam.entries()) {
    console.log(entry);
}
console.log(srchparam.get('city'));

// window.location.assign()
console.log('---location.assign-------------');
// window.location.assign('https://www.bilibili.com/');
// window.location = 'https://www.bilibili.com/';
// window.location.href = 'https://www.bilibili.com/';

// window.location.replace()
// window.location.replace('https://www.bilibili.com/');

// location.reload()
// window.location.reload();       // 无限循环！！！
