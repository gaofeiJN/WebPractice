//
const dropzone=document.getElementById("dropzone");

dropzone.addEventListener("dragenter", handleDrop);
dropzone.addEventListener("dragover", handleDrop);
dropzone.addEventListener("drop", handleDrop);

function handleDrop(e) {
    e.preventDefault();

    if (e.type==='drop'){
        console.log(e);
    }
}