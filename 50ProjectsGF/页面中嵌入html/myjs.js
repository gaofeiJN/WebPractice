// mybut.addEventListener("click",addlink());
function addlink(){
    var divleft = document.getElementById("divleft");
    var myin = document.getElementById("myin");
    var myhref = myin.value;
    var mytext = "link";
    var mybr=document.createElement("br");

    var mya = document.createElement("a");
    mya.href = myhref;
    mya.innerHTML = mytext;
    mya.target="myframe";

    divleft.appendChild(mybr);
    divleft.appendChild(mya);
};
