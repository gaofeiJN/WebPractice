// 剪切板事件
// beforecopy ?
// copy
// beforecut ?
// cut
// beforepaste ?
// paste

const area1 = document.forms[0].elements['textarea1'];
console.log(area1);

// 直接设置e.target.value的值
// area1.addEventListener('paste', function (e) {
//     e.preventDefault();
//     console.log('area1 on paste');
//
//     let str = e.clipboardData.getData('text/plain');
//     str = str + `[paste at : ${new Date().toLocaleString()}]`;
//     console.log('clipboardData : ' + e.clipboardData.getData('text/plain'));
//     console.log(str);
//
//     let value;
//     value = e.target.value.substring(0, e.target.selectionStart) + str + e.target.value.substring(e.target.selectionEnd);
//     e.target.value = value;
// });

// 使用Selection对象
area1.addEventListener('paste', function (e) {
    e.preventDefault();
    console.log('area1 on paste');

    let str = e.clipboardData.getData('text/plain');
    str = str + `[paste at : ${new Date().toLocaleString()}]`;
    console.log('clipboardData : ' + e.clipboardData.getData('text/plain'));
    console.log(str);

    // window.getSelection()
    let selection=window.getSelection();
    selection.deleteFromDocument();
    selection.getRangeAt(0).insertNode(document.createTextNode(str));
    selection.collapseToEnd();
});

const box2=document.forms[0].elements['input2'];
box2.addEventListener('paste', function (e) {
    e.preventDefault();
    console.log('box2 on paste');

    let str = e.clipboardData.getData('text/plain');
    str = str + `[paste at : ${new Date().toLocaleString()}]`;
    console.log('clipboardData : ' + e.clipboardData.getData('text/plain'));
    console.log(str);

    // window.getSelection()
    let selection=window.getSelection();
    selection.deleteFromDocument();
    selection.getRangeAt(0).insertNode(document.createTextNode(str));
    selection.collapseToEnd();
});