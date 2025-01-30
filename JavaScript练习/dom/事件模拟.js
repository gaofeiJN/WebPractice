
// let event=document.createEvent('MouseEvent');
// event.initMouseEvent('click',true,true,window,0,0,0,0,0,false,false,false,false,0,null);

let event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button:0,
})
let btn=document.getElementById('btn');
btn.addEventListener('click', function(){
    console.log('click');
});

btn.dispatchEvent(event);