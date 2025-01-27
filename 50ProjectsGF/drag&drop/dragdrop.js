// global
let draggedItem = {};

// dragged item
let fill = document.querySelector(".fill");

fill.addEventListener("dragstart", handleDragStart);
fill.addEventListener("drag", handleDrag);
fill.addEventListener("dragend", handleDragEnd);

function handleDragStart(e) {
  console.log("dragstart.target : " + e.target);

  e.target.classList.add("dragged");
  draggedItem = e.target;
}

function handleDragEnd(e) {
  console.log("dragend.target : " + e.target);

  e.target.classList.remove("dragged");

  // drop事件发生在dragend之前
  draggedItem = {};
}

function handleDrag() {
  // console.log("drag : ");
}

// drop zone
let emptys = document.querySelectorAll(".empty");

for (let i = 0; i < emptys.length; i++) {
  emptys[i].addEventListener("dragenter", handleDragEnter);
  emptys[i].addEventListener("dragover", handleDragOver);
  emptys[i].addEventListener("dragleave", handleDragLeave);
  emptys[i].addEventListener("drop", handleDrop);
}

function handleDragEnter(e) {
  console.log("dragenter.target : " + e.target.getAttribute("id"));
  e.preventDefault();
  e.target.classList.add("dragEntered");
}

function handleDragOver(e) {
  // console.log("dragover : ");
  e.preventDefault();
}

function handleDragLeave(e) {
  console.log("dragleave.target : " + e.target.getAttribute("id"));

  e.target.classList.remove("dragEntered");
}

function handleDrop(e) {
  console.log(e);
  console.log("drop.target : " + e.target.getAttribute("id"));

  e.target.appendChild(draggedItem);
  e.target.classList.remove("dragEntered");
}
