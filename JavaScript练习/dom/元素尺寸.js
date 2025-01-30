//
let div1=document.getElementById('div');

// offset
console.log(div1.offsetLeft);       // 8     * body默认padding
console.log(div1.offsetTop);        // 203
console.log(div1.offsetWidth);      // 110 = 5(border_width * 2) + 100(width)
console.log(div1.offsetHeight);     // 110 = 5(border_width * 2) + 100(height)

// client
console.log(div1.clientLeft);       // 5    border  * clientLeft,clientTop为padding-box距离border外侧的距离
console.log(div1.clientTop);        // 5    border
console.log(div1.clientWidth);      // 100  width
console.log(div1.clientHeight);     // 100  height

// getBoundClientRect()
// 返回的是border-box的位置尺寸
console.log(div1.getBoundingClientRect());
// x     : 8
// y     : 202.875
// left  : 8
// right : 118
// top   : 202.875
// bottom: 312.875
// height: 110
// width : 110