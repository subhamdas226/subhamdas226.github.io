//var start = document.querySelector('.play');  
//var scoreBoard = document.querySelector('.score span');
var arr_virus = [".virus1", ".virus2", ".virus3", ".virus4", ".virus5"];
//var timer = document.querySelector('.timer');

let playTime = 0;
let interval, lastIndex;
let score = 0;

//...........StartGame..........................................
function startGame() {
  playTime = 10;
  var scoreBoard = document.querySelector('.score span');
  scoreBoard.textContent = 0;
  score = 0;
  countdown();
  showVirus();
}

//.............Display virus.....................................
function showVirus() {
  var virus = document.querySelector(randomVirus(arr_virus));
      time = randomTime(500, 1500);

  //get the height and width and display across browser
  var fullWidth = document.body.clientWidth - 100;
  var fullHeight =document.body.clientHeight - 100;
  virus.style.position = "relative";
    virus.style.left = Math.round(Math.random() * fullWidth) + "px";
    virus.style.top = Math.round(Math.random() * fullHeight) + "px";
    document.body.appendChild(virus);

  virus.style.display = 'block'

  //How long virus will be shown and popup....................... 
  setTimeout(() => {
    virus.style.display = 'none'
    if (playTime > 0) {
      showVirus();
    }
  }, time);
}

function scoreCorona() {
  var scoreBoard = document.querySelector('.score span');
  var v1 = document.querySelector('.virus1');
  score = score + 50;
  scoreBoard.textContent = score;
  v1.style.display = 'none';  
}

function scoreSars() { 
  var scoreBoard = document.querySelector('.score span');
  var v2 = document.querySelector('.virus2');
  score = score + 30 ;
  scoreBoard.textContent = score;
  v2.style.display = 'none';  
}

function scoreFlu() {
  var scoreBoard = document.querySelector('.score span');
  var v3 = document.querySelector('.virus3');
  score = score + 10;
  scoreBoard.textContent = score;
  v3.style.display = 'none';  
}

function scoreGoodVirus() {
  var scoreBoard = document.querySelector('.score span');
  var v4 = document.querySelector('.virus4');
  score = score - 30;
  scoreBoard.textContent = score;
  v4.style.display = 'none';
}

function timeStar() {
  var timer = document.querySelector('.timer');
  var v5 = document.querySelector('.virus5');
  playTime = playTime + 3;
  timer.textContent = playTime;
  v5.style.display = 'none';  
} 

//..............Timer...........................................
function countdown() {
  const timer = document.querySelector('.timer');
  interval = setInterval(() => {
    if (playTime <= 0) {
      clearInterval(interval);
      alert("your score is : "+ score)
    }
    timer.textContent = playTime;
    playTime--;
  }, 1000);
}

//........get the random time to pop up the virus..................
function randomTime(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//........get the random virus to display on screen................
function randomVirus(arr_virus) {
  let idx = Math.floor(Math.random() * arr_virus.length);
  virus = arr_virus[idx];
  if (idx === lastIndex) {
    console.log("Nah thats the same one buddy");
    return randomVirus(arr_virus);
  }
  lastIndex = idx;
  return virus;
  //return arr_virus[Math.floor(Math.random() * arr_virus.length ) ];
}

  
