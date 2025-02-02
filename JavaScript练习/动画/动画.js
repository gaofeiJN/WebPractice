// requestAnimationFrame()
let start;
const div = document.querySelector('div');
requestAnimationFrame(singleFrame);

//
function singleFrame(timestamp) {
    if (start == undefined) {
        start = timestamp;
    }

    let width=Math.floor((timestamp - start) / 10);
    div.style.width = `${width}px`;
    if (width<200){
        requestAnimationFrame(singleFrame);
    }
}