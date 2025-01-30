var eles1 = document.querySelectorAll("p");
console.log(eles1);

var eles2 = document.getElementsByTagName("p");
console.log(eles2);

var eles3 = document.getElementsByClassName("mydiv");
console.log(eles3);

var eles4 = document.getElementsByName("mydiv");
eles4[1].innerHTML = "Hello World !";
console.log(eles4);
console.log(eles4[0]);


var eles5 = document.getElementById("mydiv3");
eles5.innerText = "2024.12.24 练习DOM对象";
console.log(eles5);


