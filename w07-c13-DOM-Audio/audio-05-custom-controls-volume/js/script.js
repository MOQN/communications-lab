var player = document.getElementById("player");
var message = document.getElementById("message");

var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var stopBtn = document.getElementById("stopBtn");
var volumeUpBtn = document.getElementById("volumeUpBtn");  // ***
var volumeDownBtn = document.getElementById("volumeDownBtn");  // ***

playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
stopBtn.addEventListener("click", stopAudio);
volumeUpBtn.addEventListener("click", volumeUp);  // ***
volumeDownBtn.addEventListener("click", volumeDown);  // ***


var volume = 1.0;


function volumeUp() {
  volume += 0.1;
  if (volume > 1.0) {
    volume = 1.0;
  }
  player.volume = volume;
  updateMessage();
}

function volumeDown() {
  volume -= 0.1;
  if (volume < 0.0) {
    volume = 0.0;
  }
  player.volume = volume;
  updateMessage();
}

function playAudio() {
  player.play();
  updateMessage();
}

function pauseAudio() {
  player.pause();
  updateMessage();
}

function stopAudio() {
  player.currentTime = 0;
  player.pause();
  updateMessage();
}

function updateMessage() {
  message.innerHTML = "time: " + player.currentTime
  message.innerHTML += "<br>";
  message.innerHTML += "volume: " + player.volume;
}
