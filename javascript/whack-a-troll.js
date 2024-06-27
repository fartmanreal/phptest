const whackArea = document.querySelector(".whack-area");
const timer = document.querySelector(".timer");
const startbutton = document.querySelector(".start-button");
const whackCounter = document.querySelector(".whack-counter");
const gameBoard = document.querySelector(".game-board");
const backArrow = document.querySelector(".back-arrow");
const whack = new Audio("./sounds/whack.mp3");
const music = new Audio("./sounds/music.mp3");
music.loop = true;

let trollArray = [];
let trollPoints = 0;
let gameOver = false;

startbutton.addEventListener("click",()=>{
  createTrollBoxes(16);
  timerStart();
  trollFunctionality();
  startbutton.style.visibility = "hidden";
  music.play();
});

function createTrollBoxes(trollboxAmount){
  for(let i =0; i<trollboxAmount; i++){
    const trollBox = document.createElement("div");
    trollBox.classList.add("troll-box");
    whackArea.appendChild(trollBox);

    const trollWall = document.createElement("div");
    trollWall.classList.add("troll-wall");
    trollBox.appendChild(trollWall);

    const troll = document.createElement("img");
    troll.src = "./images/troll-main-page.png";
    troll.classList.add("troll");
    trollWall.appendChild(troll);
    trollMovement(troll);

    trollArray.push(troll);
  }
}

function timerStart(){
  let value = 60;
  let timerID = setInterval(() => {
    value--;
    timer.innerHTML = "0 . " + value;
    if(value===0){
      clearInterval(timerID);
      gameOver = true;
      gameOverUpdate();
      music.pause();
    }
  }, 1000);
}

function trollFunctionality(){
  trollArray.forEach(troll => {
    troll.addEventListener("click",()=>{
      if(gameOver===false){
        whack.play();
        trollPoints++;
        whackCounter.innerHTML = "Trolls " + trollPoints;
        troll.style.transform = "translateY(0)";
        var parentName = troll.parentElement;
        troll.remove();
        respawnTroll(troll, parentName);
      }
    });
  });
}

function respawnTroll(trollElement, trollParent){
  trollParent.appendChild(trollElement);
  trollMovement(trollElement);
}

function trollMovement(troll){
  let randomSec = Math.floor(Math.random()*10) * 1000;
  setTimeout(() => {
    troll.style.transform = "translateY(-80%)";
  }, randomSec);
}

function gameOverUpdate(){
  let newScore = parseInt(whackCounter.innerHTML.substring(6));
  const highScore = document.createElement("div");
  highScore.classList.add("high-score-list");
  gameBoard.replaceChild(highScore,whackArea);
  if(newScore >= localStorage.getItem("highscore")){
    localStorage.clear();
    localStorage.setItem("highscore",newScore);
  }

  const scoreText = document.createElement("p");
  scoreText.innerHTML = "High Score: " + localStorage.getItem("highscore");
  scoreText.classList.add("score-text");
  highScore.appendChild(scoreText);

  const playAgain = document.createElement("button");
  playAgain.innerHTML = "Play Again";
  playAgain.classList.add("play-again-button");
  highScore.appendChild(playAgain);

  const homeButton = document.createElement("button");
  homeButton.innerHTML = "Home";
  homeButton.classList.add("play-again-button");
  highScore.appendChild(homeButton);

  playAgain.addEventListener("click",()=>{
    window.location.reload();
  });

  homeButton.addEventListener("click",()=>{
    window.location.href = "./index.html";
  });
}

backArrow.addEventListener("click",()=>{
  window.location.href = "./index.html";
});