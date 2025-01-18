let btns = document.querySelectorAll("button");
let snds = document.querySelectorAll("audio");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    stopSounds();
    snds[i].play();
  });
}

// [].forEach( (mem) =>{} )
// 和for...in不同，枚举的是成员，不是下标！
function stopSounds() {
  snds.forEach((sound) => {
    console.log(sound);

    sound.pause();
    sound.currentTime = 0;
  });
}
