//variables for window & fire/flame
const window1 = document.getElementById("w1");
const window2 = document.getElementById("w2");
const fire = document.querySelector(".fire");
const flame = document.querySelector(".flame");

//listeners for hover and mouseleave
window1.addEventListener("mouseover",()=>{
  flame.style.visibility= "visible";
});

window2.addEventListener("mouseover",()=>{
  fire.style.visibility= "visible";
});

window1.addEventListener("mouseleave",()=>{
  flame.style.visibility= "hidden";
});

window2.addEventListener("mouseleave",()=>{
  fire.style.visibility= "hidden";
});

//variables for gate blinking
const gate = document.querySelector(".gate");
let p70 = true;
let p80 = false;
gate.style.filter = "brightness(70%)";

//gate blinking on 1 sec timer
setInterval(() => {
  if(p70===true){
    gate.style.filter = "brightness(80%)";
    p80=true;
    p70=false;
  }else{
    gate.style.filter = "brightness(70%)";
    p80=false;
    p70=true;
  }
}, 1000);

window1.addEventListener("click", ()=>{
  window.location.href = "./troll-hole.html";
});

window2.addEventListener("click",()=>{
  window.location.href = "./whack-a-troll.html";
});

gate.addEventListener("click",()=>{
  window.location.href = "./troll-scroll.html";
});