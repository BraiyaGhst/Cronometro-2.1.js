window.onload = function() {
  let seconds = 0;
  let tens = 0;
  let minutes = 0;
  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");
  let appendMinutes = document.getElementById("minutes");
  let buttonStart = document.getElementById("button-start");
  let buttonStop = document.getElementById("button-stop");
  let buttonReset = document.getElementById("button-reset");
  let interval;

  buttonStart.onclick = function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function() {
    clearInterval(interval);
  };

  buttonReset.onclick = function() {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    minutes = 0;
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    appendMinutes.innerHTML = "00";
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9 && tens <= 99) {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "00";
    }
    if (seconds <= 9) {
      appendSeconds.innerHTML = "0" + seconds;
    }
    if (seconds >= 60) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "00";
    }
    if (minutes > 9) {
      appendMinutes.innerHTML = minutes;
    }
  }
};
