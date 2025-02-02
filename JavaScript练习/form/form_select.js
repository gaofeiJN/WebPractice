const sel1 = document.forms[0].elements['select1'];
const sel2 = document.forms[0].elements['select2'];
console.log(document.forms[0].elements);
// console.log(sel1.options);

//
console.log('---select-one----------');
console.log(sel1.options);
console.log(sel1.selectedIndex);
console.log(sel1.selectedOptions);
console.log(sel1.value);
console.log(sel1.options[0].selected);
console.log(sel1.options[2].selected);

console.log('---select-one : change selectedIndex----------');
sel1.selectedIndex = 2;
console.log(sel1.options);
console.log(sel1.selectedIndex);
console.log(sel1.selectedOptions);
console.log(sel1.value);
console.log(sel1.options[0].selected);
console.log(sel1.options[2].selected);

//
console.log('---select-multiple----------');
console.log(sel2.options);
console.log(sel2.selectedIndex);
console.log(sel2.selectedOptions);
console.log(sel2.value);
console.log(sel2.options[0].selected);
console.log(sel2.options[2].selected);

console.log('---select-multiple : change selectedIndex----------');
sel2.selectedIndex = 2;
console.log(sel2.options);
console.log(sel2.selectedIndex);
console.log(sel2.selectedOptions);
console.log(sel2.value);
console.log(sel2.options[0].selected);
console.log(sel2.options[2].selected);

console.log('---select-multiple : change option.selected----------');
sel2.options[1].selected = true;
sel2.options[3].selected = true;
console.log(sel2.options);
console.log(sel2.selectedIndex);
console.log(sel2.selectedOptions);
console.log(sel2.value);
console.log(sel2.options[0].selected);
console.log(sel2.options[2].selected);

//
