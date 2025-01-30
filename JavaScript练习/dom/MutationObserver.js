//
let observer = new MutationObserver(function(mutations) {
    console.log(mutations);
});

observer.observe(document.body, { attributes: true, childList: true, subtree: true });

let text=document.createTextNode("Hello World");
document.body.appendChild(text);