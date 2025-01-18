const hello = "Hello World";
var myp1 = document.getElementById("myp1");
var btn1 = document.getElementById("btn1");
var flag1 = false;
var ctr1 = 0;
var mod1 = 0;
var wkstr = "";

btn1.addEventListener("click", function () {
    flag1 = !flag1;
    if (flag1 == true) {
        loopsub();
        btn1.innerText = "停止";
    } else {
        btn1.innerText = "开始";
    }
})

function loopsub() {
    mod1 = ++ctr1 % 12;
    if (mod1==0){
        mod1 = ++ctr1 % 12;
    }

    wkstr = hello.substring(0, mod1);
    myp1.innerText = wkstr;

    if (flag1 == true) {
        setTimeout(loopsub, 200);
    }
}