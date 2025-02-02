const textbox=document.forms[0].elements['input1'];
const textarea=document.forms[0].elements['textarea1'];

window.addEventListener('load',() =>{
    console.log('window load');
    textbox.focus();
});

textbox.addEventListener('focus',(e) =>{
    console.log('textbox focus');
    // console.log(this);              // this: window ☆ HTML内联事件处理器中的this为HTML元素
    e.target.select();
});

textbox.addEventListener('select',(e) =>{
    console.log(`textbox selected: ${e.target.value}`);
    console.log(`textbox selected, selected text : ${e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)}`);
})

textarea.addEventListener('focus',(e) =>{
    console.log('textarea focus');
    e.target.setSelectionRange(2,6);
});

textarea.addEventListener('select',(e) =>{
    console.log(`textarea selected: ${e.target.value}`);
    console.log(`textarea selected, selected text : ${e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)}`);

    // window.getSelection()方法
    let selection = window.getSelection();
    console.log(selection);
    let range=selection.getRangeAt(0);
    console.log(range);
    range.ins
})