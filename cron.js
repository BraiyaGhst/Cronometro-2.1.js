window.onload = function() {
  let milliseconds = 0;
  let seconds = 0;
  let minutes = 0;
  let appendMilliseconds = document.getElementById("milliseconds");
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
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    appendMilliseconds.innerHTML = "000";
    appendSeconds.innerHTML = "00";
    appendMinutes.innerHTML = "00";
  };

  function startTimer() {
    milliseconds++;

    if (milliseconds <= 9) {
      appendMilliseconds.innerHTML = "00" + milliseconds;
    } else if (milliseconds <= 99) {
      appendMilliseconds.innerHTML = "0" + milliseconds;
    } else {
      appendMilliseconds.innerHTML = milliseconds;
    }

    if (milliseconds >= 100) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      milliseconds = 0;
      appendMilliseconds.innerHTML = "000";
    }

    if (seconds >= 60) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "00";
    }

    if (minutes >= 10) {
      appendMinutes.innerHTML = minutes;
    }
  }
};
