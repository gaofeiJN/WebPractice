let txt1 = document.getElementById("txt1");
let label1 = document.getElementById("label1");
console.log(txt1);
console.log(window);
console.log(txt1.parentElement == txt1.parentNode);

let label2=label1.cloneNode(true);
document.body.appendChild(label2);

console.log(label2.childNodes);