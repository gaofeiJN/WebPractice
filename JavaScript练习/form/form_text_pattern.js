const input2=document.forms[0].elements['input2'];

input2.addEventListener('change', e => {
    console.log(input2.pattern);
    console.log(input2.value);

    console.log(input2.validity);
    console.log(input2.validity.patternMismatch);
})