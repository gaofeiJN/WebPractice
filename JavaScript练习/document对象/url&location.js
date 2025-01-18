function showURL() {
    console.log(document.URL);
    console.log(document.location.href);
    console.log(document.location.host);
    console.log(document.location.hostname);
    console.log(document.location.port);
    console.log(document.location.search);
    console.log(document.location.hash);

};

function jump() {
    document.location.assign("./hello.html");
}

showURL();

// document.URL = document.location.href
// file:///E:/SRC/WebPractice/JavaScript%E7%BB%83%E4%B9%A0/document%E5%AF%B9%E8%B1%A1/index.html?inp1=&inp2=&inp3=&s
// 1. 文档不是http时，location.host,hostname,port的值为空
// 2.