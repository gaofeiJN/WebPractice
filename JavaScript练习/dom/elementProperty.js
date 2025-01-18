var div1=document.getElementById("mydiv1");
var div2=document.getElementById("mydiv2");

// id,name,class,width ...
console.log(div1);
console.log(div1.id);
console.log(div1.name);
console.log(div1.class);
console.log(div1.classList);
console.log(div1.width);

// class可以有多个值，中间用空格隔开
// 标签中的class属性，其实是classList，不是class ?????
div1.class="class1 class2 class3";
console.log(div1.class);
console.log(div1);

// classList的方法
// 标签中的class属性，其实是classList，不是class ?????
// add()
// remove()
// contains()   存在，返回true;不存在，返回false
// toggle() 存在，则删掉；不存在，则追加
div1.classList.add("class4");
div1.classList.remove("class3");
console.log(div1.classList);
console.log(div1.classList.contains("class2"));
console.log(div1);

div1.classList.toggle("class5");
console.log(div1.classList);
console.log(div1);
// div1.classList.toggle("class5");
// console.log(div1.classList);
// console.log(div1);

// innerText  不能识别其内部的标签
// innerHTML  可以识别其内部的标签
div1.innerText="<a href=\"https://www.baidu.com/\">link</a>";
div2.innerHTML="<a href=\"https://www.baidu.com/\">link</a>";