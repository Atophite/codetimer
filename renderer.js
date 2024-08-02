document.addEventListener('DOMContentLoaded', () => {
  let timer = new Timer(0);
  let timerInterval;
  let timerElement = document.getElementById("timerText");
  let playButton = document.getElementById("playButton");
  let addMinutesButton = document.getElementById("addMinutesButton");
  let add10MinutesButton = document.getElementById("add10MinutesButton");

  playButton.addEventListener('click', () => {

    if (timer.state === "pause") {
      timer.state = "play"
      playTimer(); 
    }
    else {
      timer.state = "pause"
      stopTimer();
    }

  });

  addMinutesButton.addEventListener('click', () => {
    addMinutes(1);
  })

  add10MinutesButton.addEventListener('click', () => {
    addMinutes(10);
  })

  function initTimer() {
    console.log("test");
    updateTimer();
  }


  function updateTimer() {
    let minutes = Math.floor(timer.duration / 60);
    let seconds = timer.duration % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerElement.innerText = minutes + ":" + seconds;
  }

  function playTimer() {
    console.log("play");
    timer.state = "play";
    playButton.innerText = "Pause"
    timerInterval = setInterval(() => {
      if (timer.duration > 0) {
        timer.duration--;
        updateTimer();
      } else {
        playButton.innerText = "Replay"
        var audio = new Audio('./assets/bellwav.wav');
        audio.volume = 0.1;
        audio.playbackRate = 1.5;
        audio.play();
        clearInterval(timerInterval);
      }
    }, 1000);
  }

  function stopTimer() {
    console.log("stop");
    playButton.innerText = "Play"
    clearInterval(timerInterval);
  }

  function addMinutes(minutes) {
    timer.duration += minutes * 60;
    updateTimer()
  }

  initTimer();
});