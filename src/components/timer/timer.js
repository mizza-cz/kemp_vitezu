let countdownWrapper = document.getElementById('countdown-wrapper');
if (countdownWrapper) {
  let countdownDays = document.getElementById('countdown-days');
  let countdownHours = document.getElementById('countdown-hours');

  function updateTimer() {
    let targetDate = new Date(countdownWrapper.dataset.datetime);
    let now = new Date();
    let timeDiff = targetDate - now;

    if (timeDiff <= 0) {
      countdownWrapper.innerHTML =
        '<b class="py-3 text-uppercase" style="grid-column: span 4">Utkání již bylo zahájeno</b>';
      clearInterval(timerInterval);
    } else {
      let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      countdownDays.innerHTML = days;
      countdownHours.innerHTML = hours;
    }
  }

  updateTimer();

  let timerInterval = setInterval(updateTimer, 1000);
}

//# sourceMappingURL=/dist/js/countdown.js.map
