// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [Math.floor(Math.random() * 5) + 1,
               Math.floor(Math.random() * 5) + 1,
               Math.floor(Math.random() * 5) + 1,
               Math.floor(Math.random() * 5) + 1,
               Math.floor(Math.random() * 5) + 1,
               Math.floor(Math.random() * 5) + 1,
               Math.floor(Math.random() * 5) + 1,
               Math.floor(Math.random() * 5) + 1];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var guessCounter = 0;
var strikeCounter = 0;
var time = 3;
var countdown5; // what the countdown timer should currently display
var countdown4; 
var countdown3;
var countdown2;
var countdown1;
var countdown0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var winAudio = new Audio('https://cdn.glitch.global/bd9d3c02-9f1d-43fb-b77b-9ae7df1537dc/fanfare.wav?v=1648043072991');
var loseAudio = new Audio('https://cdn.glitch.global/bd9d3c02-9f1d-43fb-b77b-9ae7df1537dc/fail.wav?v=1648044043481')
var timeoutID = setTimeout(function(){console.log("Setting timer")},5000);

function startGame(){
  //initialize game variables
  clueHoldTime = 1000;
  strikeCounter = 0;
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("countdown").classList.remove("hidden");

  playClueSequence();
}


function stopGame(){
  //initialize game variables
  clearTimeout(timeoutID);
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("countdown").classList.add("hidden");
  clearTimeout(countdown5);
  clearAllTimeout();
  document.getElementById("countdown").innerHTML = "Time: 5";

  randomizePattern();
}

function playTone(btn, len){
  if (btn == 1) document.getElementById("1").play();                
  if (btn == 2) document.getElementById("2").play();
  if (btn == 3) document.getElementById("3").play();
  if (btn == 4) document.getElementById("4").play();
  if (btn == 5) document.getElementById("5").play();

  tonePlaying = true
  
  setTimeout(function(){
    stopTone()
  },len)
}
      
function startTone(btn){
  playTone(btn);
  tonePlaying = true;
}

function stopTone(btn){
  
  if (btn == 1) { document.getElementById("1").pause();
                  document.getElementById("1").currentTime = 0;
                }
  
  if (btn == 2) { document.getElementById("2").pause();
                  document.getElementById("2").currentTime = 0;
                }
  if (btn == 3) { document.getElementById("3").pause();
                  document.getElementById("3").currentTime = 0;
                }
  if (btn == 4) { document.getElementById("4").pause();
                  document.getElementById("4").currentTime = 0;
                }
  if (btn == 5) { document.getElementById("5").pause();
                  document.getElementById("5").currentTime = 0;
                }

  tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){

    lightButton(btn);
    playTone(btn);
    setTimeout(clearButton,clueHoldTime,btn);
    console.log(clueHoldTime);

    setTimeout(() => {stopTone(btn);}, clueHoldTime)
    setTimeout(function(){restartTimer();},clueHoldTime);
  }
}

function playClueSequence(){
  guessCounter = 0;
  //document.body.style.cursor = 'progress';     

  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far

    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")

    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue

    setTimeout(function(){restartTimer();},delay);

    setTimeout(function(){timer();},delay+1000); 

    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime -= 21;
  }
    setTimeout(function(){document.body.style.cursor = 'auto';},delay); 
}

function loseGame(){
  loseAudio.volume = .05;
  loseAudio.play();
  stopGame();
  clearTimeout(timeoutID);
  
  alert("Game Over. You lost.");
  randomizePattern();
  guessCounter = 0;
}

function winGame(){
  winAudio.volume = 0.05;
  winAudio.play();
  stopGame();
  clearTimeout(timeoutID);
  
  alert("Game Over. You won!");
  randomizePattern();
  guessCounter = 0;
}

function guess(btn){
  console.log("user guessed: " + btn);
  timer();
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    strikeCounter++;
    alert("That's strike " + strikeCounter +"!");

    if (strikeCounter == 3) {
      clearAllTimeout();
      loseGame();
    }
  }
}  



function timer() {

  if (gamePlaying){
  clearTimeout(timeoutID);
  restartTimer();
  timeoutID = setTimeout(function(){
    if (strikeCounter < 3){
      strikeCounter++;
      alert("Time expired! That's strike " + strikeCounter +"!");
    
      if (strikeCounter == 3) {
        loseGame();
      }
     
  timer();   // Use recursion to reset countdown timer 
  }},5000);
  }
  else return;
}

function clearAllTimeout(){
  
  clearTimeout(countdown5);
  clearTimeout(countdown4);
  clearTimeout(countdown3);
  clearTimeout(countdown2);
  clearTimeout(countdown1);
  clearTimeout(countdown0);
}


function restartTimer (){
  
  clearAllTimeout();
  
  countdown5 = setTimeout(myTimeout5, 0) ;
  countdown4 = setTimeout(myTimeout4, 1000) ;
  countdown3 = setTimeout(myTimeout3, 2000) ;
  countdown2 = setTimeout(myTimeout2, 3000);
  countdown1 = setTimeout(myTimeout1, 4000) ;
  countdown0 = setTimeout(myTimeout0, 5000);
}
  

// Functions to output current time left
function myTimeout5() {
  document.getElementById("countdown").innerHTML = "Time: 5";
}
function myTimeout4() {
  document.getElementById("countdown").innerHTML = "Time: 4";
}
function myTimeout3() {
  document.getElementById("countdown").innerHTML = "Time: 3";
}
function myTimeout2() {
  document.getElementById("countdown").innerHTML = "Time: 2";
}
function myTimeout1() {
  document.getElementById("countdown").innerHTML = "Time: 1";
}
function myTimeout0() {
  document.getElementById("countdown").innerHTML = "Time: 0";
}

// Randomize the sequence of buttons for the game
function randomizePattern(){
  
  pattern =   [Math.floor(Math.random() * 5) + 1,
               Math.floor(Math.random() * 5) + 1,
               Math.floor(Math.random() * 5) + 1,
               Math.floor(Math.random() * 5) + 1,
               Math.floor(Math.random() * 5) + 1,
               Math.floor(Math.random() * 5) + 1,
               Math.floor(Math.random() * 5) + 1,
               Math.floor(Math.random() * 5) + 1];
}