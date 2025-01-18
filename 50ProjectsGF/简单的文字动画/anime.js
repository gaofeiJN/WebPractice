// elements
let txt1 = document.getElementById("txt1");
let num1 = document.getElementById("num1");

// global
let staflg = false;
let timeID;
let i = 0;
let speed = 1;
const hellow = "Hello World!";

// 事件监听器
btn1.addEventListener("click", handleClick);

function handleClick(e) {
  // 设置flag
  staflg = !staflg;

  //
  if (staflg == false) {
    e.target.innerText = "开始";

    window.clearTimeout(timeID);
  } else {
    e.target.innerText = "暂停";

    loop();
  }
}

function loop() {
  let str = hellow.substring(0, i++ % (hellow.length + 1));
  txt1.innerText = str;

  let speed = 300 / Number(num1.value);
  timeID = window.setTimeout(loop, speed);
}
