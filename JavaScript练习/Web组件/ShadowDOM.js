//
const host = document.getElementById('host');

// 创建影子DOM
let shadow = host.attachShadow({mode: 'open'});

// 为影子DOM添加样式表
// 方法一  创建CSSStyleSheet对象，stylesheet.replace()方法为样式表赋值，将样式表赋给shadow.adoptedStyleSheets属性
// let sheet = new CSSStyleSheet();
// sheet.replace("p {color:red;}");
// shadow.adoptedStyleSheets = [sheet];

// 方法二  shadow节点添加style子节点
// let sheet = document.createElement("style");
// sheet.innerText = "p { color: red;}";
// shadow.appendChild(sheet);

// 方法三  将样式比定义在HTML模板中
// 添加子节点
const fargment = document.getElementById('template').content;
shadow.appendChild(fargment);
