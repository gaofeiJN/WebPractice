// elems
let app1 = document.getElementById('app1');

// global vars

// listeners
window.onload = function () {
    // 注意：要想监听元素上的鼠标右击事件，必须
    // 1.去掉默认的contextmenu事件，否则会和右键事件同时出现。
    // 2.监听"mouseDown"事件
    document.oncontextmenu = function (e) {
        e.preventDefault();
    };
}

app1.addEventListener('mousedown', handleMouseDown);
app1.addEventListener('change', handleChange);

function handleChange(e) {
    let span1 = document.createElement('span');
    span1.innerHTML = e.target.value;

    app1.appendChild(span1);

    e.target.value = '';
}

// 注意：e.target.tagName是大写的SPAN！！
function handleMouseDown(e) {
    if (e.button === 0) {
        if (e.target.tagName.toLowerCase() === 'span') {
            e.target.style.color = "gray";
            e.target.style.textDecoration = "line-through";
        }
    } else if (e.button === 2) {
        if (e.target.tagName.toLowerCase() === 'span') {
            app1.removeChild(e.target);
        }
    }
}