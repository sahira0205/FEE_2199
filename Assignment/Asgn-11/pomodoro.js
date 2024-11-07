let pomodoroTimer;
let minutes = 25;
let seconds = 0;
let isPomodoroRunning = false;

function startPomodoro() {
  if (isPomodoroRunning) return;
  
  isPomodoroRunning = true;
  pomodoroTimer = setInterval(function() {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes === 0 && seconds === 0) {
      clearInterval(pomodoroTimer);
      alert("Pomodoro is over! Take a break.");
      isPomodoroRunning = false;
    }
    document.getElementById('timer').textContent = formatTime(minutes) + ":" + formatTime(seconds);
  }, 1000);
}

function resetPomodoro() {
  clearInterval(pomodoroTimer);
  isPomodoroRunning = false;
  minutes = 25;
  seconds = 0;
  document.getElementById('timer').textContent = "25:00";
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
