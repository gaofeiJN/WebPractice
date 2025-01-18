var btn1 = document.getElementById("btn1");
var inp1 = document.getElementById("inp1");
var p1 = document.getElementById("p1");

console.log(btn1);
console.log(inp1);
console.log(p1);

btn1.addEventListener("click", () => console.log("点击了按钮"));

//用函数名的方式是，函数名后面不加括号()
btn1.addEventListener("click", btnEventHandler1);

//用函数名的方式是，函数名后面不加括号()
inp1.addEventListener("keyup", inp1EventHandler);

function btnEventHandler1(e) {
    console.log(e);
    console.log(e.target);
    e.target.innerText = "点击之后"
    p1.innerText = "点击了按钮";
}

function inp1EventHandler(e) {
    p1.innerText = e.target.value;
}


// event.preventDefault()
// 阻止浏览器对当前事件的默认行为

// event.stopPropagation()
// 阻止事件向上冒泡