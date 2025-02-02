//
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.forms['form1']);
// console.log(document.forms['form1'].elements);

let form = document.querySelector('form');

//用form访问控件
console.log(form[0]);
console.log(form['btn1']);
console.log(form['sel1']);     // id

//用form.elements访问控件
console.log(form.elements[0]);          // index
console.log(form.elements['btn1']);     // name
console.log(form.elements['in1']);      // id
console.log(form.elements['sel1']);     // id
console.log(form.elements['btn']);      // id

// 具有相同name的元素
console.log(form.elements['radio1']);
console.log(form.elements['radio11']);
console.log(form.elements['radio12']);
console.log(form.elements['radio13']);
