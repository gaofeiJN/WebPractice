// elems
const remainedItem = document.querySelector('.remained');
const drunkItem = document.querySelector('.drunk');
const glasses = document.querySelector('.glasses');
const glass = document.querySelectorAll('.glass');

// global
const total = 2000;
let remained = 2000;
let drunk = 0;

// EventListener
glasses.addEventListener('click', handleClick);

function handleClick(e) {
    let ctr = Number(e.target.getAttribute('data-id'));
    let curren = (ctr + 1) * 250;

    // 设定元素属性
    if (drunk !== curren) {
        for (let i = 0; i < glass.length; i++) {
            drunk = curren;
            remained = total - drunk;
            if (i <= ctr) {
                glass[i].style.backgroundColor = "#6ab3f8";
                glass[i].style.color = "white";
            } else {
                glass[i].style.backgroundColor = "white";
                glass[i].style.color = "#6ab3f8";
            }
        }
    } else {
        drunk = drunk - 250;
        remained = total - drunk;
        e.target.style.backgroundColor = "white";
        e.target.style.color = "#6ab3f8";
    }

    // 设定元素属性
    remainedItem.innerHTML = `${remained}ml remained`;
    drunkItem.innerHTML = `${drunk}ml drunk`;

    // 设定元素属性
    let down = (drunk / total) * 100;
    let up = 100 - down;
    remainedItem.style.height = `${up}%`;
    drunkItem.style.height = `${down}%`;
}