const textBox = document.forms[0].elements['input1'];

// 过滤输入字符
// keypress事件的event对象的keyCode属性
// String.fromCharCode()方法
textBox.addEventListener('keypress',(e) =>{
    console.log(`keypress : ${e.keyCode} - ${String.fromCharCode(e.keyCode)}`);
    e.preventDefault();
    let char=String.fromCharCode(e.keyCode);
    if (/\d/.test(char)){
        e.target.value = e.target.value + '' + char;
    }
});

