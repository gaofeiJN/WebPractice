// window position : 全屏： 175 , 0  ; 缩小： 547 , 233
// documentElement position : 0 , 0
// element position : 22 , 244
console.log('window position');
console.log(`window screen position : ${window.screenLeft} , ${window.screenTop}`);
console.log(`document offset : ${document.documentElement.offsetLeft} , ${document.documentElement.offsetTop}`);
let div1=document.getElementById('div1');
console.log(`element offset : ${div1.offsetLeft} , ${div1.offsetTop}`);
let div2=document.getElementById('div2');
console.log(`element offset : ${div2.offsetLeft} , ${div2.offsetTop}`);


// moveTo(),moveBy()
// 没有作用？？？
window.moveTo(500, 500);
window.moveBy(500, 500);

// window 尺寸
console.log('尺寸');
console.log(`window outer size : ${window.outerWidth} , ${window.outerHeight}`);
console.log(`window inner size : ${window.innerWidth} , ${window.innerHeight}`);
console.log(`document client size : ${document.documentElement.clientWidth} , ${document.documentElement.clientHeight}`);
console.log(`element client size : ${div1.clientWidth} , ${div1.clientHeight}`);        // 500 200
console.log(`element offset size : ${div1.offsetWidth} , ${div1.offsetHeight}`);        // 502 202

// client : padding-box
// offset : border-box