let ul=document.getElementById('list');

// old
console.log('---old----------');
console.log(ul.parentNode);
console.log(ul.previousSibling);        // 空白文本
console.log(ul.nextSibling);            // 空白文本
console.log(ul.childNodes.length);      // 7
console.log(ul.childNodes);             // 空白文本 * 4 + <li> * 3
console.log(ul.firstChild);             // 空白文本
console.log(ul.lastChild);              // 空白文本

// new
console.log('---new----------');
console.log(ul.parentElement);          // 与parentNode相同
console.log(ul.previousElementSibling); // <input>
console.log(ul.nextElementSibling);     // <script>
console.log(ul.children.length);        // 3
console.log(ul.children);               // <li> * 3
console.log(ul.firstElementChild);      // <li>
console.log(ul.lastElementChild);       // <li>