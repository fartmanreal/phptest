const homebutton = document.querySelector(".home-page");
const sourceButton = document.querySelector(".source-code");

homebutton.addEventListener("click",()=>{
  window.location.href = "./index.html";
});

sourceButton.addEventListener("click",()=>{
  window.open("https://github.com/NickWickboldt/troll-project",'_blank');
});