// elems
let boxes = document.querySelectorAll("input");

// global vars
let boxcar = [];

// Event Listeners
for (let box of boxes) {
    box.addEventListener("change", handleChange);
}

function handleChange(e) {
    if (e.target.checked === true) {
        boxcar.push(e.target);
        if (boxcar.length > 2) {
            boxcar[0].checked = false;
            boxcar.shift();
        }
    }
}