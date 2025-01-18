var form1 = document.getElementById("form1");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var inp1 = document.getElementById("inp1");
var sel1 = document.getElementById("sel1");
var txt1 = document.getElementById("txt1");

// input事件
// 当input,textarea,select发生输入时，触发input事件。每次输入都会触发。
inp1.addEventListener("input", (e) => console.log(e.target.value));
sel1.addEventListener("input", (e) => console.log(e.target.value));
txt1.addEventListener("input", (e) => console.log(e.target.value));

// select事件
// 当在input,textarea,select中选中文本时，触发select事件。
inp1.addEventListener("select", () => console.log("inp1:选中了文本"));
sel1.addEventListener("select", () => console.log("sel1:选中了文本"));
txt1.addEventListener("select", () => console.log("txt1:选中了文本"));

// change事件
// 当input,textarea,select的value发生变化时，触发input事件。只在输入回车或失去焦点时触发。
inp1.addEventListener("change", (e) => console.log("changed to " + e.target.value));
sel1.addEventListener("change", (e) => console.log("changed to " + e.target.value));
txt1.addEventListener("change", (e) => console.log("changed to " + e.target.value));

// reset事件，submit事件
// 发生在form表单上
// 1. submit之后的url： 
// file:///E:/SRC/WebPractice/JavaScript练习/表单事件/index.html?sel1=baby&txt1=显示文本哈哈
// [?]后面的参数只有复选框和text area的值，没有文本框的值 ？？

form1.addEventListener("submit",() =>{
    console.log("提交了表单");
    
});

form1.addEventListener("reset",() =>{
    console.log("重置了表单");
    
});
