var div4=document.getElementById("mydiv4");

var span1=document.createElement("span");

// TextNode
var mytext1=document.createTextNode("我是插入文本1");
var mybr1=document.createElement("br");
span1.appendChild(mybr1);
span1.appendChild(mytext1);
// span1.appendChild(mybr1);          // 同一个元素，如果插入多次，则只有最后一次有效！！
var mybr2=document.createElement("br");
span1.appendChild(mybr2);

var mytext2=document.createTextNode("我是插入文本2");
span1.appendChild(mytext2);
// span1.appendChild(mybr1);          // 同一个元素，如果插入多次，则只有最后一次有效！！
var mybr3=document.createElement("br");
span1.appendChild(mybr3);

// Attribute
var myattr=document.createAttribute("name");
myattr.value="myspan";
span1.setAttributeNode(myattr);

// Append Element
div4.appendChild(span1);