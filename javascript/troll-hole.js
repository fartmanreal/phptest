const backText = document.querySelector(".back-text");
const backArrow = document.querySelector(".back-arrow");

const waterDrop = new Audio("./sounds/water-drop.mp3");
waterDrop.loop = true;

backArrow.addEventListener("mouseover",()=>{
  backText.style.color = "aliceblue";
});
backArrow.addEventListener("mouseleave", ()=>{
  backText.style.color = "black";
});
backArrow.addEventListener("click",()=>{
  window.location.href = "./index.html";
});

window.addEventListener("mousemove",()=>{
  waterDrop.play();
});
