// elems
let loveme = document.querySelector('.loveMe');
let times = document.getElementById('times');

// global vars
let clicks = 0;

// event listeners
loveme.addEventListener("dblclick", handleDoubleClick);

function handleDoubleClick(e) {
    times.innerHTML = String(++clicks);

    //
    let heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX
    const y = e.clientY

    // const leftOffset = e.target.offsetLeft
    // const topOffset = e.target.offsetTop
    //
    // const xInside = x - leftOffset
    // const yInside = y - topOffset

    heart.style.top = `${y}px`
    heart.style.left = `${x}px`

    loveme.appendChild(heart);

    setTimeout(heart.remove(), 1000);

}