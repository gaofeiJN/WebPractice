// document.createNodeIterator()
let iter1 = document.createNodeIterator(document.body, NodeFilter.SHOW_ELEMENT, null, false);

let node = iter1.nextNode();
while (node) {
    console.log(node);
    node = iter1.nextNode();
}

// document.createTreeWalker()
console.log('---TreeWalker----------');
let walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, null, false);

walker.firstChild();
walker.nextSibling();
let ul=walker.nextSibling();
console.log(ul);
let li = walker.firstChild();
while (li) {
    console.log(li);
    li = walker.nextSibling();
}

console.log(iter1);
console.log(walker);